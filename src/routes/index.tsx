import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Preloader } from "@/components/site/Preloader";
import { TrustedTech } from "@/components/site/TrustedTech";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Statistics } from "@/components/site/Statistics";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { useLenis } from "@/hooks/use-lenis";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CanbeTech — AI Software Development & Digital Agency" },
      {
        name: "description",
        content:
          "CanbeTech builds custom AI software solutions, web platforms, mobile apps, and enterprise cloud infrastructure for ambitious modern businesses.",
      },
      { property: "og:title", content: "CanbeTech — AI Software Development & Digital Agency" },
      {
        property: "og:description",
        content:
          "Building AI-powered software that accelerates business growth. Full-stack web, mobile, cloud and AI engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  const [ready, setReady] = useState(() => {
    if (typeof window !== "undefined") {
      return Boolean(
        sessionStorage.getItem("canbetech_preloader_seen") ||
          localStorage.getItem("canbetech_preloader_seen")
      );
    }
    return false;
  });

  return (
    <main className="relative min-h-screen bg-background">
      <Preloader onDone={() => setReady(true)} />
      <Nav />
      <Hero start={ready} />

      <Marquee/>

      {/* Services Teaser */}
      <Services isTeaser={true} />

      {/* Trusted Tech Logos */}
      {/* <TrustedTech /> */}

      {/* Portfolio Teaser */}
      <Projects isTeaser={true} />

      {/* Why Choose CanbeTech */}
      <WhyChooseUs />

      {/* 4-Step Engineering Process */}
      <Process />

      {/* Statistics Bar */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Final CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
