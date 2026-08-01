import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/work" },
  { label: "How we work", href: "/process" },
  
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "glass shadow-[var(--shadow-elegant)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-center gap-2 pl-2 text-lg font-semibold tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--gradient-cta)] shadow-[0_0_18px_-4px_var(--violet)]">
            <span className="h-1.5 w-1.5 rounded-full bg-background" />
          </span>
          CanbeTech<span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                className={`rounded-full px-3.5 py-2 text-[13px] transition-all duration-300 hover:bg-foreground/5 hover:text-foreground ${
                  isActive(l.href)
                    ? "bg-foreground/8 text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full border border-border px-4 py-2 text-[13px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:block"
          >
            Book a call
          </Link>
          <Link
            to="/contact"
            className="btn-cta rounded-full px-4 py-2 text-[13px] font-medium text-primary-foreground"
          >
            Try for free
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden"
          >
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-2.5 text-sm transition-colors hover:bg-foreground/5 hover:text-foreground ${
                      isActive(l.href) ? "text-foreground bg-foreground/5 font-medium" : "text-foreground/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
