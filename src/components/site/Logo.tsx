import { motion } from "motion/react";

interface LogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

/**
 * CanbeTech Pinwheel Logo — 4 petal shapes arranged in a rotational pattern
 * with a small center diamond. Clean design with no glow.
 */
export function Logo({ size = 28, animate = false, className = "" }: LogoProps) {
  const wrapperStyle = { width: size, height: size };

  if (animate) {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className={`inline-flex items-center justify-center ${className}`}
        style={wrapperStyle}
      >
        <LogoSVG size={size} />
      </motion.div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={wrapperStyle}
    >
      <LogoSVG size={size} />
    </div>
  );
}

function LogoSVG({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      {/* Top-left petal */}
      <path
        d="M44 10 C30 10, 14 24, 14 40 C14 50, 22 52, 44 52 L44 10Z"
        fill="rgba(200, 180, 240, 0.35)"
        stroke="rgba(168, 140, 220, 0.65)"
        strokeWidth="1.5"
      />
      {/* Top-right petal */}
      <path
        d="M90 44 C90 30, 76 14, 60 14 C50 14, 48 22, 48 44 L90 44Z"
        fill="rgba(200, 180, 240, 0.35)"
        stroke="rgba(168, 140, 220, 0.65)"
        strokeWidth="1.5"
      />
      {/* Bottom-right petal */}
      <path
        d="M56 90 C70 90, 86 76, 86 60 C86 50, 78 48, 56 48 L56 90Z"
        fill="rgba(200, 180, 240, 0.35)"
        stroke="rgba(168, 140, 220, 0.65)"
        strokeWidth="1.5"
      />
      {/* Bottom-left petal */}
      <path
        d="M10 56 C10 70, 24 86, 40 86 C50 86, 52 78, 52 56 L10 56Z"
        fill="rgba(200, 180, 240, 0.35)"
        stroke="rgba(168, 140, 220, 0.65)"
        strokeWidth="1.5"
      />
      {/* Center diamond */}
      <rect
        x="44"
        y="44"
        width="12"
        height="12"
        rx="2"
        fill="rgba(210, 190, 245, 0.45)"
        stroke="rgba(168, 140, 220, 0.65)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
