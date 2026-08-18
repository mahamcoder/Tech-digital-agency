const fs = require('fs');
const path = require('path');

const iconBuf = fs.readFileSync(path.join(__dirname, '../public/logo-icon.png'));
const b64 = iconBuf.toString('base64');

// Create favicon.png
fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), iconBuf);
fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), iconBuf);

// Create high-res vector wrapper favicon.svg with embedded data URI
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="100%" height="100%">
  <image href="data:image/png;base64,${b64}" width="160" height="160" preserveAspectRatio="xMidYMid meet" />
</svg>
`;

fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svgContent.trim());
console.log('Successfully generated public/favicon.svg, public/favicon.png, and public/favicon.ico using the CanbeTech logo ribbon C!');
