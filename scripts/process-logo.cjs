const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function processPNG() {
  const buf = fs.readFileSync('public/logo.png');
  let pos = 8;
  let ihdr = {};
  let idatChunks = [];

  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      ihdr.width = buf.readUInt32BE(pos + 8);
      ihdr.height = buf.readUInt32BE(pos + 12);
      ihdr.bitDepth = buf[pos + 16];
      ihdr.colorType = buf[pos + 17];
      ihdr.compression = buf[pos + 18];
      ihdr.filter = buf[pos + 19];
      ihdr.interlace = buf[pos + 20];
    } else if (type === 'IDAT') {
      idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }

  const idatBuf = Buffer.concat(idatChunks);
  const decompressed = zlib.inflateSync(idatBuf);

  const { width, height } = ihdr;
  const stride = width * 4;
  const rawPixels = Buffer.alloc(width * height * 4);

  // Unfilter PNG (filter 0-4)
  let srcOffset = 0;
  for (let y = 0; y < height; y++) {
    const filterType = decompressed[srcOffset++];
    const rowStart = y * stride;
    for (let x = 0; x < stride; x++) {
      const val = decompressed[srcOffset++];
      let a = x >= 4 ? rawPixels[rowStart + x - 4] : 0;
      let b = y > 0 ? rawPixels[(y - 1) * stride + x] : 0;
      let c = (x >= 4 && y > 0) ? rawPixels[(y - 1) * stride + x - 4] : 0;

      let raw = 0;
      if (filterType === 0) raw = val;
      else if (filterType === 1) raw = (val + a) & 0xff;
      else if (filterType === 2) raw = (val + b) & 0xff;
      else if (filterType === 3) raw = (val + Math.floor((a + b) / 2)) & 0xff;
      else if (filterType === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
        raw = (val + pr) & 0xff;
      }
      rawPixels[rowStart + x] = raw;
    }
  }

  console.log('Parsed PNG pixels successfully.');

  // Create transparent PNG (remove pure/near-white background)
  // And create dark-mode version (invert dark navy 'Canbe' text to white/silver while preserving vibrant gradients!)
  const transPixels = Buffer.from(rawPixels);
  const darkPixels = Buffer.from(rawPixels);

  // Find icon bounds and text bounds
  let minIconX = width, maxIconX = 0, minIconY = height, maxIconY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = rawPixels[idx];
      const g = rawPixels[idx + 1];
      const b = rawPixels[idx + 2];
      const a = rawPixels[idx + 3];

      // If near white background, make transparent with smooth alpha blending
      const brightness = (r + g + b) / 3;
      const isWhiteish = (r > 240 && g > 240 && b > 240);

      if (isWhiteish) {
        // Smoothly fade out near 255
        const diff = Math.min(255 - r, 255 - g, 255 - b);
        const newAlpha = Math.min(255, Math.max(0, diff * 12));
        transPixels[idx + 3] = newAlpha;
        darkPixels[idx + 3] = newAlpha;
      }

      // For dark-mode version:
      // If the pixel is part of "Canbe" or "AI-INFUSED EXCELLENCE" (dark navy/black: low r, g, b with low color saturation)
      // Find icon bounds (x < 220)
      if (x < 220 && transPixels[idx + 3] > 60) {
        if (x < minIconX) minIconX = x;
        if (x > maxIconX) maxIconX = x;
        if (y < minIconY) minIconY = y;
        if (y > maxIconY) maxIconY = y;
      }

      if (transPixels[idx + 3] > 20) {
        // Dark text detection: dark navy/black in "Canbe" or tagline
        const maxC = Math.max(r, g, b);
        const minC = Math.min(r, g, b);
        const isDarkNavyOrBlack = maxC < 80;
        if (isDarkNavyOrBlack && x >= 180) {
          // Transform dark navy text into bright white/silver for dark background
          darkPixels[idx] = 245;
          darkPixels[idx + 1] = 247;
          darkPixels[idx + 2] = 250;
        }
      }
    }
  }

  console.log(`Icon bounding box: x=[${minIconX}, ${maxIconX}], y=[${minIconY}, ${maxIconY}]`);

  function encodePNG(pixels, w, h) {
    const rowLen = w * 4;
    const filtered = Buffer.alloc(h * (rowLen + 1));
    for (let y = 0; y < h; y++) {
      filtered[y * (rowLen + 1)] = 0; // Filter None
      pixels.copy(filtered, y * (rowLen + 1) + 1, y * rowLen, (y + 1) * rowLen);
    }
    const deflated = zlib.deflateSync(filtered);

    // PNG signature
    const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

    // IHDR chunk
    const ihdrChunk = Buffer.alloc(13);
    ihdrChunk.writeUInt32BE(w, 0);
    ihdrChunk.writeUInt32BE(h, 4);
    ihdrChunk[8] = 8; // bit depth
    ihdrChunk[9] = 6; // color type RGBA
    ihdrChunk[10] = 0;
    ihdrChunk[11] = 0;
    ihdrChunk[12] = 0;

    function makeChunk(name, data) {
      const len = data.length;
      const chunk = Buffer.alloc(12 + len);
      chunk.writeUInt32BE(len, 0);
      chunk.write(name, 4, 4, 'ascii');
      data.copy(chunk, 8);
      const crc = crc32(chunk.subarray(4, 8 + len));
      chunk.writeUInt32BE(crc, 8 + len);
      return chunk;
    }

    return Buffer.concat([
      header,
      makeChunk('IHDR', ihdrChunk),
      makeChunk('IDAT', deflated),
      makeChunk('IEND', Buffer.alloc(0))
    ]);
  }

  // Simple CRC32
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }
  function crc32(buf) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ (-1)) >>> 0;
  }

  // Save transparent logo
  fs.writeFileSync('public/logo-transparent.png', encodePNG(transPixels, width, height));
  console.log('Saved public/logo-transparent.png');

  // Save dark-mode logo (white Canbe text)
  fs.writeFileSync('public/logo-dark.png', encodePNG(darkPixels, width, height));
  console.log('Saved public/logo-dark.png');

  // Crop standalone icon
  const iconPad = 8;
  const iconW = (maxIconX - minIconX + 1) + iconPad * 2;
  const iconH = (maxIconY - minIconY + 1) + iconPad * 2;
  const iconPixels = Buffer.alloc(iconW * iconH * 4);

  for (let y = 0; y < iconH; y++) {
    for (let x = 0; x < iconW; x++) {
      const srcX = minIconX - iconPad + x;
      const srcY = minIconY - iconPad + y;
      const dstIdx = (y * iconW + x) * 4;
      if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
        const srcIdx = (srcY * width + srcX) * 4;
        iconPixels[dstIdx] = transPixels[srcIdx];
        iconPixels[dstIdx + 1] = transPixels[srcIdx + 1];
        iconPixels[dstIdx + 2] = transPixels[srcIdx + 2];
        iconPixels[dstIdx + 3] = transPixels[srcIdx + 3];
      }
    }
  }

  fs.writeFileSync('public/logo-icon.png', encodePNG(iconPixels, iconW, iconH));
  console.log('Saved public/logo-icon.png');
}

processPNG();
