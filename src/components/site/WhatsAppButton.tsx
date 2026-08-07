import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = "923026833531",
  message = "Hello CanbeTech team! I would like to inquire about your services.",
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formattedPhone = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-7 right-7 z-50 flex items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center focus:outline-none"
      >
        {/* Hover Text Badge — Clean Dark Glass Pill */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 15, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute right-16 whitespace-nowrap rounded-2xl border border-white/20 bg-[#161328]/90 px-4.5 py-2.5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">
                  Chat on WhatsApp
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Glowing Pulsing Ring (Matching Website Violet Theme) */}
        <span className="absolute -inset-2 animate-pulse rounded-full bg-violet-600/30 blur-md transition-opacity duration-300 group-hover:bg-violet-500/50" />

        {/* Main Sleek Floating Button (Website Theme Color) */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#6366f1] via-[#7c3aed] to-[#9333ea] shadow-xl shadow-violet-950/60 ring-2 ring-white/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-600/60 active:scale-95">
          {/* White WhatsApp Speech Bubble + Handset Icon */}
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.484-8.414" />
          </svg>
        </div>
      </a>
    </div>
  );
}
