import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ProcessPage } from "@/components/pages/ProcessPage";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How We Work — Orbit Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Four phases. Zero waste. See how Orbit's operating system turns marketing into a disciplined, compounding growth engine.",
      },
      { property: "og:title", content: "How We Work — Orbit Agency" },
      {
        property: "og:description",
        content: "Diagnose, architect, deploy, compound. A disciplined orbit around your revenue.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessRoute,
});

function ProcessRoute() {
  return (
    <PageLayout>
      <ProcessPage />
    </PageLayout>
  );
}
