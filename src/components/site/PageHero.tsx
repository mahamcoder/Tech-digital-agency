import { motion } from "motion/react";
import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/*
 * Each page variant gets a unique visual treatment.
 * No more generic AI SVG animations — instead we use
 * typographic design, geometric patterns, and overlaid
 * decorative elements that feel hand-crafted.
 */

type HeroVariant =
  | "services"
  | "work"
  | "industries"
  | "about"
  | "contact"
  | "process";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  /** Each variant triggers a completely different hero layout */
  aiVariant?: HeroVariant;
  children?: ReactNode;
}

export function PageHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  aiVariant,
  children,
}: PageHeroProps) {
  // Select the right visual treatment
  const Visual = aiVariant ? variantVisuals[aiVariant] : null;

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pt-44 md:pb-28">
      {/* Base ambient glow — shared across all variants */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[15%] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />
      </div>

      {/* Per-variant decorative visuals (positioned behind text) */}
      {Visual && <Visual />}

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease }}
            className="mt-8 max-w-5xl font-display text-3xl font-semibold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl xl:text-[4.8rem]"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.26, ease }}
            className="mt-7 max-w-3xl text-lg leading-[1.8] text-muted-foreground sm:text-xl"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="btn-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}

          {/* Extra content slot */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="mt-14 w-full"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Per-variant background decorations
   Each is a purely decorative overlay, 
   positioned behind text via -z-[5].
   ═══════════════════════════════════════════ */

// ─── SERVICES: Giant outlined word "BUILD" behind heading ───
function ServicesVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] flex items-center justify-center overflow-hidden">
      {/* Giant typographic watermark */}
      <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="select-none font-display text-[18vw] font-black uppercase leading-none tracking-[-0.06em]"
        style={{
          WebkitTextStroke: "1.5px rgba(168, 85, 247, 0.12)",
          WebkitTextFillColor: "transparent",
        }}
      >
        BUILD
      </motion.span>

      {/* Diagonal accent lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="svc-diag" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svc-diag)" />
      </svg>

      {/* Corner accent shapes */}
      <motion.div
        className="absolute right-[8%] top-[18%] h-28 w-28 rounded-3xl border border-primary/15 rotate-12"
        animate={{ rotate: [12, 18, 12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[10%] bottom-[22%] h-20 w-20 rounded-2xl border border-primary/10 -rotate-6"
        animate={{ rotate: [-6, -12, -6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// ─── WORK / CASE STUDIES: Bento-style grid overlay ───
function WorkVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
      {/* Bento grid pattern behind hero */}
      <div className="absolute inset-x-[8%] top-[25%] grid grid-cols-4 grid-rows-3 gap-3 opacity-[0.06]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-2xl border border-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            style={{
              gridRow: i === 0 ? "span 2" : i === 5 ? "span 2" : undefined,
            }}
          />
        ))}
      </div>

      {/* Giant number watermark */}
      <motion.span
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[6%] top-[14%] select-none font-display text-[22vw] font-black leading-none text-white/[0.03]"
      >
        WORK
      </motion.span>

      {/* Crosshair accent */}
      <div className="absolute left-[12%] top-[30%] h-16 w-16">
        <div className="absolute left-1/2 top-0 h-full w-px bg-primary/15" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-primary/15" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30" />
      </div>
    </div>
  );
}

// ─── INDUSTRIES: Concentric circle rings with sector markers ───
function IndustriesVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] flex items-center justify-center overflow-hidden">
      {/* Concentric rings */}
      {[180, 260, 340, 420].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/[0.05]"
          style={{ width: size, height: size }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
        />
      ))}

      {/* Sector markers on outer ring */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * 210;
        const y = Math.sin(rad) * 210;
        return (
          <motion.div
            key={`marker-${i}`}
            className="absolute h-2.5 w-2.5 rounded-full bg-primary/25"
            style={{
              left: `calc(50% + ${x}px - 5px)`,
              top: `calc(50% + ${y}px - 5px)`,
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
        );
      })}

      {/* Giant text watermark */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute select-none font-display text-[16vw] font-black uppercase leading-none tracking-[-0.05em]"
        style={{
          WebkitTextStroke: "1px rgba(168, 85, 247, 0.07)",
          WebkitTextFillColor: "transparent",
        }}
      >
        SECTOR
      </motion.span>
    </div>
  );
}

// ─── ABOUT: Typography + measurement lines ───
function AboutVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
      {/* Giant outline text */}
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[20vw] font-black uppercase leading-none"
        style={{
          WebkitTextStroke: "1.5px rgba(168, 85, 247, 0.09)",
          WebkitTextFillColor: "transparent",
        }}
      >
        STUDIO
      </motion.span>

      {/* Horizontal measurement lines */}
      <div className="absolute left-[5%] right-[5%] top-[30%] flex items-center gap-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
      <div className="absolute left-[5%] right-[5%] bottom-[28%] flex items-center gap-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Vertical side accents */}
      <div className="absolute left-[8%] top-[28%] bottom-[26%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute right-[8%] top-[28%] bottom-[26%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      {/* Corner brackets (editorial feel) */}
      <div className="absolute left-[8%] top-[28%] h-8 w-8 border-l-2 border-t-2 border-white/[0.08] rounded-tl-sm" />
      <div className="absolute right-[8%] top-[28%] h-8 w-8 border-r-2 border-t-2 border-white/[0.08] rounded-tr-sm" />
      <div className="absolute left-[8%] bottom-[26%] h-8 w-8 border-l-2 border-b-2 border-white/[0.08] rounded-bl-sm" />
      <div className="absolute right-[8%] bottom-[26%] h-8 w-8 border-r-2 border-b-2 border-white/[0.08] rounded-br-sm" />
    </div>
  );
}

// ─── CONTACT: Beacon pulse + converging lines ───
function ContactVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] flex items-center justify-center overflow-hidden">
      {/* Radiating pulse rings from center */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full border border-primary/15"
          style={{ width: 100, height: 100 }}
          animate={{
            scale: [1, 4, 7],
            opacity: [0.3, 0.1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Converging diagonal lines toward center */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="50%" y2="50%" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        <line x1="100%" y1="0" x2="50%" y2="50%" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        <line x1="0" y1="100%" x2="50%" y2="50%" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        <line x1="100%" y1="100%" x2="50%" y2="50%" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
      </svg>

      {/* Center beacon dot */}
      <motion.div
        className="absolute h-4 w-4 rounded-full bg-primary/30"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Giant watermark */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute select-none font-display text-[14vw] font-black uppercase leading-none tracking-[-0.04em]"
        style={{
          WebkitTextStroke: "1px rgba(168, 85, 247, 0.06)",
          WebkitTextFillColor: "transparent",
        }}
      >
        REACH
      </motion.span>
    </div>
  );
}

// ─── PROCESS: Blueprint-style grid + numbered steps ───
function ProcessVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
      {/* Blueprint grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="proc-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#proc-grid)" />
      </svg>

      {/* Step numbers overlay */}
      {["01", "02", "03", "04"].map((num, i) => (
        <motion.span
          key={num}
          className="absolute select-none font-display text-[8vw] font-black text-white/[0.025]"
          style={{
            left: `${15 + i * 20}%`,
            top: `${30 + (i % 2) * 15}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
        >
          {num}
        </motion.span>
      ))}

      {/* Flow arrow lines */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 15% 60% Q 35% 45%, 50% 55% T 85% 40%"
          fill="none"
          stroke="white"
          strokeOpacity="0.05"
          strokeWidth="2"
          strokeDasharray="8 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

// Map variant key to visual component
const variantVisuals: Record<HeroVariant, React.FC> = {
  services: ServicesVisual,
  work: WorkVisual,
  industries: IndustriesVisual,
  about: AboutVisual,
  contact: ContactVisual,
  process: ProcessVisual,
};
