import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Orbit Digital Marketing Agency" },
      {
        name: "description",
        content:
          "We exist to make marketing accountable. Meet the senior operators behind Orbit's growth engine — across New York, London, Tokyo, and remote.",
      },
      { property: "og:title", content: "About — Orbit Agency" },
      {
        property: "og:description",
        content: "Senior operators, not account managers. Learn about the team and principles behind Orbit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <PageLayout>
      <AboutPage />
    </PageLayout>
  );
}
