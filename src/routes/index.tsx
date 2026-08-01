import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Preloader } from "@/components/site/Preloader";

import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

import { useLenis } from "@/hooks/use-lenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CanbeTech — Growth Marketing Agency | Performance Media, SEO & Web" },
      {
        name: "description",
        content:
          "CanbeTech builds production-grade growth systems for ambitious brands — performance media, SEO, lifecycle CRM, web experience & creative studio, all in one engine.",
      },
      { property: "og:title", content: "CanbeTech — Growth Marketing Agency | Performance Media, SEO & Web" },
      {
        property: "og:description",
        content:
          "Turn marketing into measurable ROI. Brand, performance media, creative and analytics in one growth engine.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  const [ready, setReady] = useState(false);

  return (
    <main className="relative min-h-screen bg-background">
      <Preloader onDone={() => setReady(true)} />
      <Nav />
      <Hero start={ready} />

      <Marquee />
      <Services />
      <Work />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />

    </main>
  );
}
