import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;
const brand = "CANBETECH".split("");

export function Preloader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onDone();
    }, 2300);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, filter: "blur(14px)", scale: 1.04 }}
          transition={{ duration: 0.9, ease }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated Pinwheel Logo with rotation & smooth reveal — no glow */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease }}
            >
              <Logo size={56} animate className="opacity-90" />
            </motion.div>

            <div className="flex items-baseline overflow-hidden font-display text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
              {brand.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.09, ease }}
                  className="inline-block text-foreground"
                >
                  {c}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.95, ease }}
                className="text-primary"
              >
                .
              </motion.span>
            </div>

            <div className="h-px w-40 overflow-hidden bg-border">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
                className="h-full w-full bg-[var(--gradient-cta)]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground"
            >
              Intelligent Software Solutions
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
