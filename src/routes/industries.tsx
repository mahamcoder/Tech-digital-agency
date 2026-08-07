import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { IndustriesPage } from "@/components/pages/IndustriesPage";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industry Solutions — CanbeTech AI Software Development" },
      {
        name: "description",
        content:
          "Specialized AI, web, mobile, and cloud software engineering for FinTech, Healthcare, E-Commerce, Real Estate, SaaS, EdTech, and Logistics.",
      },
      { property: "og:title", content: "Industry Solutions — CanbeTech" },
      {
        property: "og:description",
        content:
          "Targeted digital solutions and software platforms built for demanding global enterprise industries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesRoute,
});

function IndustriesRoute() {
  return (
    <PageLayout>
      <IndustriesPage />
    </PageLayout>
  );
}
