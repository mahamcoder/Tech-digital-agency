import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import planet from "@/assets/image.png";
import { ArrowUpRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const headline = ["Building Intelligent Software for Tomorrow"];

const stats = [
  { value: "$240M+", label: "Media managed" },
  { value: "4.8x", label: "Avg. blended ROAS" },
  { value: "120+", label: "Brands scaled" },
];

export function Hero({ start = true }: { start?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const show = start ? "show" : "hidden";

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-5"
    >
      {/* soft branded glow behind the planet */}
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-[18%] -z-10 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      {/* faint grid + aurora sweep */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.16) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.16) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(70% 55% at 50% 40%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(70% 55% at 50% 40%, black, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: ["-25%", "25%", "-25%"], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[380px] w-[70vw] -translate-x-1/2 rounded-full bg-[var(--gradient-cta)] opacity-30 blur-[150px]"
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 max-w-3xl text-center">
        <motion.a
          href="#work"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 0.8, ease }}
          className="group relative mt-20 mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full p-[1px] transition-transform duration-300 hover:scale-[1.03]"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(168,85,247,0.6), rgba(255,255,255,0.08))",
          }}
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-purple-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />

          <span className="flex items-center gap-2.5 rounded-full bg-[#0a0a0f] px-4 py-1.5 text-[11.5px] tracking-[0.06em] text-gray-300 transition-colors duration-300 group-hover:text-white">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
            </span>

            <span className="font-semibold uppercase tracking-[0.12em] text-purple-400">
              New
            </span>

            <span className="h-3 w-px bg-white/15" />

            <span>2026 Growth Benchmark Report</span>

            <svg
              className="ml-0.5 h-3 w-3 -translate-x-0.5 opacity-60 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.a>

        <h1 className="mx-auto max-w-[16ch] text-balance font-display text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-[3.6rem] md:text-[4rem]">
          <span className="sr-only">Turn Marketing Into Measurable ROI — Not Another Campaign</span>
          <span aria-hidden className="flex flex-wrap items-baseline justify-center gap-x-[0.24em] gap-y-[0.05em]">
            {headline.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden pb-[0.03em] align-baseline">
                <motion.span
                  variants={{
                    hidden: { y: "110%", opacity: 0, filter: "blur(12px)" },
                    show: { y: "0%", opacity: 1, filter: "blur(0px)" },
                  }}
                  initial="hidden"
                  animate={show}
                  transition={{ duration: 1, delay: 0.1 + i * 0.09, ease }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>

        </h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="mx-auto mt-5 max-w-[65ch] text-balance text-[16px] leading-[1.75] text-muted-foreground sm:text-[15.5px]"
        >
          CanbeTech builds AI-powered software with scalable architecture to deliver fast, reliable, and high-quality digital solutions that drive business growth.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 1, delay: 0.92, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="btn-cta rounded-full px-12 py-2.5 text-base font-medium text-primary-foreground"
          >
            Get Started < ArrowUpRight  className="size-5 ml-2 inline" /> 
          </a>

          <a
            href="/services"
            className="glass rounded-full px-6 py-2.5 text-base text-white transition-all duration-300 hover:text-foreground hover:translate-y-[-4px]"
          >
            Our Services
          </a>
        </motion.div>

        <motion.dl
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={show}
          transition={{ duration: 1, delay: 1.05, ease }}
          className="mx-auto mt-12 flex max-w-lg items-center justify-center divide-x divide-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-5 sm:px-7">
              <dt className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* planet curve */}
      <motion.div
        style={{ y: planetY }}
        className="pointer-events-none absolute inset-x-0 -bottom-[16vw] md:-bottom-[28vw] z-0 flex justify-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 90, scale: 1.05 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate={show}
          transition={{ duration: 1.6, ease }}
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
              maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
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
