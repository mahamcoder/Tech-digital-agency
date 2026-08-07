import { motion } from "motion/react";

interface AiHeroGraphicsProps {
  variant: "services" | "work" | "industries" | "about" | "contact";
}

export function AiHeroGraphics({ variant }: AiHeroGraphicsProps) {
  switch (variant) {
    case "services":
      return <NeuralNetSvg />;
    case "work":
      return <DataMatrixSvg />;
    case "industries":
      return <IndustrySectorSvg />;
    case "about":
      return <GlobalOrbitSvg />;
    case "contact":
      return <BeaconRadarSvg />;
    default:
      return null;
  }
}

// ─── SERVICES: Pulse Neural Network SVG ───
function NeuralNetSvg() {
  const nodes = [
    { cx: 80, cy: 90, r: 6, delay: 0 },
    { cx: 220, cy: 50, r: 8, delay: 0.2 },
    { cx: 360, cy: 120, r: 7, delay: 0.4 },
    { cx: 160, cy: 180, r: 5, delay: 0.6 },
    { cx: 300, cy: 220, r: 8, delay: 0.8 },
    { cx: 440, cy: 170, r: 6, delay: 1.0 },
    { cx: 240, cy: 280, r: 7, delay: 1.2 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 3 },
    { from: 1, to: 2 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 3, to: 6 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
  ];

  return (
    <div className="pointer-events-none relative mx-auto my-4 flex h-44 w-full max-w-xl items-center justify-center sm:h-60">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[90px]" />
      <svg
        viewBox="0 0 500 320"
        className="h-full w-full overflow-visible drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]"
      >
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Lines */}
        {connections.map((c, i) => {
          const n1 = nodes[c.from];
          const n2 = nodes[c.to];
          return (
            <motion.line
              key={`conn-${i}`}
              x1={n1.cx}
              y1={n1.cy}
              x2={n2.cx}
              y2={n2.cy}
              stroke="url(#neuralGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r + 10}
              fill="var(--primary)"
              opacity="0.15"
              animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: n.delay,
              }}
            />
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="var(--primary)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: n.delay,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── WORK: Data Matrix Graphic ───
function DataMatrixSvg() {
  return (
    <div className="pointer-events-none relative mx-auto my-4 flex h-44 w-full max-w-xl items-center justify-center sm:h-60">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />
      <svg
        viewBox="0 0 500 280"
        className="h-full w-full overflow-visible drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
      >
        <defs>
          <linearGradient id="matrixGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[40, 100, 160, 220, 280, 340, 400, 460].map((x, i) => (
          <line
            key={`x-${i}`}
            x1={x}
            y1="20"
            x2={x}
            y2="260"
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}
        {[40, 100, 160, 220].map((y, i) => (
          <line
            key={`y-${i}`}
            x1="20"
            y1={y}
            x2="480"
            y2={y}
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}

        {/* Animated Bar chart lines */}
        {[
          { x: 90, h: 120 },
          { x: 170, h: 180 },
          { x: 250, h: 140 },
          { x: 330, h: 210 },
          { x: 410, h: 160 },
        ].map((bar, i) => (
          <g key={`bar-${i}`}>
            <motion.rect
              x={bar.x}
              y={240 - bar.h}
              width="24"
              height={bar.h}
              rx="6"
              fill="url(#matrixGrad)"
              initial={{ height: 0, y: 240 }}
              animate={{ height: [bar.h * 0.8, bar.h, bar.h * 0.8] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={bar.x + 12}
              cy={230 - bar.h}
              r="4"
              fill="var(--primary)"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          </g>
        ))}

        {/* Growth Trendline */}
        <motion.path
          d="M 80 200 Q 180 160, 260 130 T 440 50"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

// ─── INDUSTRIES: Holographic Sector Ring SVG ───
function IndustrySectorSvg() {
  return (
    <div className="pointer-events-none relative mx-auto my-4 flex h-44 w-full max-w-xl items-center justify-center sm:h-60">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full overflow-visible drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
      >
        {/* Outer Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="12 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle Counter Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="#06b6d4"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="20 10"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Glowing Core */}
        <motion.circle
          cx="200"
          cy="200"
          r="45"
          fill="var(--primary)"
          opacity="0.15"
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="200" cy="200" r="16" fill="var(--primary)" />

        {/* Orbiting Satellite Dots */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 200 + 140 * Math.cos(rad);
          const y = 200 + 140 * Math.sin(rad);
          return (
            <motion.circle
              key={`sat-${i}`}
              cx={x}
              cy={y}
              r="5"
              fill="var(--primary)"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          );
        })}
      </svg>
    </div>
  );
}

// ─── ABOUT: Global Orbit Constellation ───
function GlobalOrbitSvg() {
  return (
    <div className="pointer-events-none relative mx-auto my-4 flex h-44 w-full max-w-xl items-center justify-center sm:h-60">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />
      <svg
        viewBox="0 0 500 280"
        className="h-full w-full overflow-visible drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]"
      >
        <ellipse cx="250" cy="140" rx="190" ry="85" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
        <ellipse cx="250" cy="140" rx="190" ry="38" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <ellipse cx="250" cy="140" rx="85" ry="85" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="1" />

        {[
          { x: 310, y: 130, r: 7, delay: 0 },
          { x: 210, y: 100, r: 6, delay: 0.3 },
          { x: 130, y: 120, r: 6, delay: 0.6 },
          { x: 380, y: 160, r: 5, delay: 0.9 },
        ].map((hub, i) => (
          <g key={`hub-${i}`}>
            <motion.line
              x1="250"
              y1="140"
              x2={hub.x}
              y2={hub.y}
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: hub.delay }}
            />
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r={hub.r + 5}
              fill="var(--primary)"
              opacity="0.2"
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: hub.delay }}
            />
            <circle cx={hub.x} cy={hub.y} r={hub.r} fill="var(--primary)" />
          </g>
        ))}

        <circle cx="250" cy="140" r="9" fill="var(--primary)" />
      </svg>
    </div>
  );
}

// ─── CONTACT: Radar Beacon Wave SVG ───
function BeaconRadarSvg() {
  return (
    <div className="pointer-events-none relative mx-auto my-4 flex h-44 w-full max-w-xl items-center justify-center sm:h-60">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full overflow-visible drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]"
      >
        {[45, 80, 115, 150].map((r, i) => (
          <motion.circle
            key={`wave-${i}`}
            cx="200"
            cy="150"
            r={r}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.5"
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.5, 0],
              scale: [0.8, 1.15, 1.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          />
        ))}

        <motion.circle
          cx="200"
          cy="150"
          r="15"
          fill="var(--primary)"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="200" cy="150" r="5" fill="#ffffff" />
      </svg>
    </div>
  );
}
