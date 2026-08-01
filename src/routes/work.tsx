import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { WorkPage } from "@/components/pages/WorkPage";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case Studies — Orbit Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Real outcomes from real partnerships. See how Orbit helped brands cut CAC, scale ROAS, and build sustainable growth engines.",
      },
      { property: "og:title", content: "Case Studies — Orbit Agency" },
      {
        property: "og:description",
        content: "Outcomes, not impressions. Explore client results that moved revenue.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkRoute,
});

function WorkRoute() {
  return (
    <PageLayout>
      <WorkPage />
    </PageLayout>
  );
}
