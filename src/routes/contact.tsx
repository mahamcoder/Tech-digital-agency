import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Orbit Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Book a 30-minute diagnostic call with Orbit. We'll map where your growth is leaking and what it takes to fix it — no pitch deck.",
      },
      { property: "og:title", content: "Contact — Orbit Agency" },
      {
        property: "og:description",
        content: "Start your growth partnership. Book a diagnostic call or submit a project brief.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <PageLayout>
      <ContactPage />
    </PageLayout>
  );
}
