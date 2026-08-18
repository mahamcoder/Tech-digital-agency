import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import planet from "@/assets/image copy 5.png";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const headline = ["Building Intelligent Software for Tomorrow"];

const stats = [
  { value: 50, suffix: "+", prefix: "", label: "Products Delivered" },
  { value: 99.9, suffix: "%", prefix: "", label: "Production Uptime", decimals: 1 },
  { value: 25, suffix: "k+", prefix: "", label: "Users Scaled" },
];

/** Animated counter that counts up from 0 to `end` */
function AnimatedStat({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2000,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (hasRun) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRun(true);
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;
            setDisplay(
              decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
            );
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, decimals, hasRun]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export function Hero({ start = true }: { start?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Smoother, subtler parallax — reduced intensity to prevent jarring scroll
  const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const show = start ? "show" : "hidden";

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-5"
    >
      {/* soft branded glow behind the planet */}
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-[18%] -z-10 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[#2563FF]/10 blur-[140px]" />

      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100, 116, 139, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 116, 139, 0.2) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(70% 55% at 50% 40%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(70% 55% at 50% 40%, black, transparent 75%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, willChange: "transform, opacity" }}
        className="relative z-10 max-w-3xl text-center"
      >
        {/* Pill Badge */}
        <motion.a
          href="/work"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 0.8, ease }}
          className="group relative mt-20 mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#64748B]/30 bg-[#0E1526]/80 px-3 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-[#06B6D4]/50 hover:bg-[#0E1526] sm:gap-2.5 sm:px-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06B6D4]" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#06B6D4] sm:text-[11px]">
            New
          </span>

          <span className="h-3 w-px bg-[#64748B]/40" />

          <span className="text-[11px] text-[#F8FAFC] sm:text-[12px]">AI-Powered Software Development</span>

          <svg
            className="ml-0.5 h-3 w-3 text-[#94A3B8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#F8FAFC] sm:h-3.5 sm:w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>

        <h1 className="mx-auto max-w-[17ch] text-balance font-display text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#F8FAFC] sm:text-4xl md:text-5xl lg:text-[4.5rem]">
          <span className="sr-only">Building Intelligent Software for Tomorrow</span>
          <span aria-hidden className="flex flex-wrap items-baseline justify-center gap-x-[0.24em] gap-y-[0.05em]">
            {headline.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden pb-[0.03em] align-baseline">
                <motion.span
                  variants={{
                    hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
                    show: { y: "0%", opacity: 1, filter: "blur(0px)" },
                  }}
                  initial="hidden"
                  animate={show}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.09, ease }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mx-auto mt-4 max-w-[65ch] text-balance text-sm leading-[1.8] text-[#CBD5E1] sm:text-base md:text-lg"
        >
          CanbeTech builds mobile apps, web platforms and software systems faster using AI-accelerated development workflows
        </motion.p>

        {/* Action Buttons — same width and height */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 0.9, delay: 0.82, ease }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3.5"
        >
          <a
            href="/contact"
            className="btn-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-[#F8FAFC] sm:w-48"
          >
            Get Started <ArrowUpRight className="h-4 w-4 inline" />
          </a>

          <a
            href="/services"
            className="btn-secondary inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-[#F8FAFC] sm:w-48"
          >
            Our Services
          </a>
        </motion.div>

        {/* Clean Stats Counter */}
        <motion.dl
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 0.9, delay: 0.95, ease }}
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-0 sm:divide-x sm:divide-[#64748B]/25 max-w-xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-4 sm:px-7 text-center">
              <dt className="font-display text-lg font-semibold tracking-tight text-[#F8FAFC] sm:text-2xl">
                <AnimatedStat
                  end={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                  duration={2200}
                />
              </dt>
              <dd className="mt-1 text-[9.5px] uppercase tracking-[0.18em] text-[#CBD5E1] sm:text-[10.5px]">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* planet curve — GPU-accelerated for smooth scroll */}
      <motion.div
        style={{ y: planetY, willChange: "transform" }}
        className="pointer-events-none absolute inset-x-0 -bottom-[16vw] md:-bottom-[28vw] z-0 flex justify-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60, scale: 1.03 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate={show}
          transition={{ duration: 1.4, ease }}
          className="relative w-[150vw] max-w-none sm:w-[120vw]"
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-[12%] top-[6%] h-[34%] rounded-[100%] bg-primary/25 blur-[100px]"
          />
          <img
            src={planet}
            alt="Glowing violet planet horizon"
            className="relative w-full select-none"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
            }}
            loading="eager"
          />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
