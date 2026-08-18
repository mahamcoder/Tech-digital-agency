import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/work" },
  { label: "Industries", href: "/industries" },
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
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "border border-[#64748B]/25 bg-[#0A0F1C]/85 shadow-2xl shadow-[#0A0F1C]/90 backdrop-blur-xl"
            : "border border-[#64748B]/15 bg-[#0A0F1C]/40 backdrop-blur-md"
        }`}
      >
        {/* Logo — always visible */}
        <Link to="/" className="flex min-w-0 items-center gap-2.5 pl-2 text-xl font-semibold tracking-tight">
          <Logo size={28} />
          <span className="font-display font-bold text-[#F8FAFC]">
            Canbe<span className="bg-gradient-to-r from-[#2563FF] to-[#8B5CF6] bg-clip-text text-transparent">Tech</span>
            <span className="text-[#2563FF]">.</span>
          </span>
        </Link>

        {/* Desktop nav links — hidden below lg */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                className={`rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${
                  isActive(l.href)
                    ? "bg-[#2563FF]/15 font-medium text-[#F8FAFC] border border-[#2563FF]/30"
                    : "text-[#CBD5E1] hover:bg-white/5 hover:text-[#F8FAFC]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons — hidden below lg */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <a
            href="mailto:info@canbetech.com?subject=Book%20a%20Call%20-%20CanbeTech"
            className="rounded-full border border-[#64748B]/30 px-4 py-2 text-sm text-[#CBD5E1] transition-colors hover:border-[#2563FF]/50 hover:text-[#F8FAFC]"
          >
            Book a call
          </a>
          <Link
            to="/contact"
            className="btn-cta rounded-full px-5 py-2 text-sm font-medium text-[#F8FAFC]"
          >
            Start your Project
          </Link>
        </div>

        {/* Mobile hamburger — visible below lg */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
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
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden"
          >
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-foreground/5 hover:text-foreground ${
                      isActive(l.href)
                        ? "bg-foreground/5 font-medium text-foreground"
                        : "text-foreground/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA buttons */}
            <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-cta block rounded-2xl px-4 py-3 text-center text-sm font-semibold text-[#F8FAFC]"
              >
                Start your Project
              </Link>
              <a
                href="mailto:info@canbetech.com?subject=Book%20a%20Call%20-%20CanbeTech"
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-medium text-primary transition-colors hover:bg-foreground/5"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
