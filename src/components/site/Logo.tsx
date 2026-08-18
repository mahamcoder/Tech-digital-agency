import { motion } from "motion/react";

interface LogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
  variant?: "icon" | "full";
}

/**
 * CanbeTech 3D Ribbon 'C' Logo
 * Features the signature origami folded ribbon 'C' with cyan-blue-indigo-purple gradients.
 */
export function Logo({
  size = 32,
  animate = false,
  className = "",
  variant = "icon",
}: LogoProps) {
  if (variant === "full") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <LogoIcon size={size} animate={animate} />
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-tight text-foreground leading-none">
            Canbe<span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Tech</span>
          </span>
          <span className="text-[8px] font-semibold tracking-[0.28em] text-muted-foreground uppercase mt-1">
            AI-INFUSED EXCELLENCE
          </span>
        </div>
      </div>
    );
  }

  return <LogoIcon size={size} animate={animate} className={className} />;
}

function LogoIcon({
  size,
  animate,
  className = "",
}: {
  size: number;
  animate?: boolean;
  className?: string;
}) {
  const content = (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="shrink-0"
    >
      <defs>
        {/* Top ribbon wing gradient: Bright Cyan to Royal Blue */}
        <linearGradient id="canbe-grad-top" x1="160" y1="20" x2="20" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C0FA" />
          <stop offset="45%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="#3B66F5" />
        </linearGradient>

        {/* Outer Fold / Left Elbow: Royal Blue to Deep Violet */}
        <linearGradient id="canbe-grad-fold" x1="20" y1="40" x2="70" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4338CA" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>

        {/* Bottom ribbon wing gradient: Deep Indigo to Vibrant Azure Cyan */}
        <linearGradient id="canbe-grad-bot" x1="30" y1="120" x2="160" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="40%" stopColor="#2563EB" />
          <stop offset="85%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Subtle 3D inner facet shadow */}
        <linearGradient id="canbe-grad-inner" x1="45" y1="60" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#312E81" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ribbon Fold Shape - Isometric Chevron C */}
      {/* 1. Left Fold & Base */}
      <path
        d="M 68 24 L 24 68 C 18 74 18 86 24 92 L 68 136 L 94 110 L 52 68 L 68 24 Z"
        fill="url(#canbe-grad-fold)"
      />

      {/* 2. Top Wing extending rightwards */}
      <path
        d="M 148 24 L 68 24 L 24 68 L 52 68 L 84 36 L 148 36 C 154 36 156 30 152 26 Z"
        fill="url(#canbe-grad-top)"
      />

      {/* 3. Bottom Wing extending rightwards */}
      <path
        d="M 24 92 L 68 136 L 148 136 C 154 136 156 142 152 146 L 148 148 L 68 148 L 24 104 C 18 98 18 86 24 92 Z"
        fill="url(#canbe-grad-bot)"
      />

      {/* 4. Complete Main Facet Geometry (Seamless 3D isometric ribbon C) */}
      {/* Top Segment */}
      <polygon
        points="148,22 68,22 22,68 48,94 88,54 148,54"
        fill="url(#canbe-grad-top)"
      />

      {/* Left Bend Facet */}
      <polygon
        points="22,68 22,92 68,138 94,112 58,76 48,94"
        fill="url(#canbe-grad-fold)"
      />

      {/* Bottom Segment */}
      <polygon
        points="68,138 148,138 148,106 88,106 48,66 22,92"
        fill="url(#canbe-grad-bot)"
      />

      {/* Shadow overlay for depth */}
      <polygon
        points="48,66 88,106 72,122 36,86"
        fill="url(#canbe-grad-inner)"
      />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          filter: [
            "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))",
            "drop-shadow(0 0 20px rgba(147, 51, 234, 0.45))",
            "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))",
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className={`inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="/logo-icon.png"
          alt="CanbeTech Logo"
          width={size}
          height={size}
          className="h-full w-full object-contain"
          onError={(e) => {
            // Fallback to SVG if image fails
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/logo-icon.png"
        alt="CanbeTech Logo"
        width={size}
        height={size}
        className="h-full w-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
