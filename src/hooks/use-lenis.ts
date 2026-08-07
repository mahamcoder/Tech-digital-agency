import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let raf = 0;
    let lenis: any = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      (window as any).lenis = lenis;

      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (lenis) {
        lenis.destroy();
        delete (window as any).lenis;
      }
    };
  }, []);
}
