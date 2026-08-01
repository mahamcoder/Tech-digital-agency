import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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
          <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" />
          <motion.div
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{ opacity: [0.2, 0.6, 0.3], scale: 1.2 }}
            transition={{ duration: 2.3, ease }}
            className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-primary/25 blur-[120px]"
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease }}
              className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-cta)] shadow-[0_0_30px_-6px_var(--violet)]"
            >
              <span className="h-2 w-2 rounded-full bg-background" />
            </motion.span>

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
              CANBETECH
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
