import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Orbit Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Brand, performance media, creative, CRM and analytics — six disciplines unified into one growth engine. Explore Orbit's full service offering.",
      },
      { property: "og:title", content: "Services — Orbit Digital Marketing Agency" },
      {
        property: "og:description",
        content: "Six disciplines, one growth system. See how Orbit builds compounding marketing engines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <PageLayout>
      <ServicesPage />
    </PageLayout>
  );
}
