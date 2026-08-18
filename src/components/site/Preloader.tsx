import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;
const brand = "CANBETECH".split("");

export function Preloader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(() => {
    if (typeof window !== "undefined") {
      const alreadySeen =
        sessionStorage.getItem("canbetech_preloader_seen") ||
        localStorage.getItem("canbetech_preloader_seen");
      return !alreadySeen;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const alreadySeen =
        sessionStorage.getItem("canbetech_preloader_seen") ||
        localStorage.getItem("canbetech_preloader_seen");

      if (alreadySeen) {
        setShow(false);
        onDone();
        return;
      }
    }

    const t = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("canbetech_preloader_seen", "true");
        localStorage.setItem("canbetech_preloader_seen", "true");
      }
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
          className="fixed inset-0 z-[100] grid place-items-center bg-[#0A0F1C]"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated CanbeTech Ribbon Logo */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1.0, ease }}
            >
              <Logo size={68} animate className="opacity-100" />
            </motion.div>

            <div className="flex items-baseline overflow-hidden font-display text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              {brand.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.08, ease }}
                  className={`inline-block ${
                    i >= 5
                      ? "text-[#F8FAFC] font-bold"
                      : "text-[#F8FAFC]"
                  }`}
                >
                  {c}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.95, ease }}
                className="text-[#2563FF]"
              >
                .
              </motion.span>
            </div>

            <div className="h-px w-44 overflow-hidden bg-[#64748B]/25">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-[#06B6D4] via-[#2563FF] to-[#8B5CF6]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.38em" }}
              transition={{ duration: 1.0, delay: 0.8 }}
              className="text-[11px] font-medium uppercase text-[#94A3B8]"
            >
              AI-INFUSED EXCELLENCE
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
