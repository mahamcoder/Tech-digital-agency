import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLenis } from "@/hooks/use-lenis";

export function PageLayout({ children }: { children: ReactNode }) {
  useLenis();

  return (
    <main className="relative min-h-screen bg-background">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
