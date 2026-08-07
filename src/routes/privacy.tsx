import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CanbeTech" },
      { name: "description", content: "CanbeTech Privacy Policy and data protection standards." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageLayout>
      <section className="relative isolate overflow-hidden pb-24 pt-36 md:pb-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[15%] top-[20%] h-[350px] w-[450px] rounded-full bg-primary/10 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <Reveal>
            <SectionLabel>Legal & Trust</SectionLabel>
            <h1 className="mt-6 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Privacy Policy & Data Security
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: August 6, 2026
            </p>
          </Reveal>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-foreground/80">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-3 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                  <h2 className="text-lg font-semibold text-foreground">1. Data Protection Commitment</h2>
                </div>
                <p className="mt-3">
                  At CanbeTech, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your data when you visit our website, submit project inquiries, or interact with our software services.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-3 text-primary">
                  <Eye className="h-6 w-6" />
                  <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
                </div>
                <p className="mt-3">
                  We collect information you directly provide when filling out forms, requesting project proposals, or contacting support, including: Name, email address, phone number, company details, and project requirements.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-3 text-primary">
                  <Lock className="h-6 w-6" />
                  <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>To provide actionable technical roadmap recommendations and project estimates.</li>
                  <li>To communicate regarding active software engineering and marketing services.</li>
                  <li>To secure our infrastructure and prevent unauthorized access.</li>
                  <li>We never sell or rent your personal information to third parties.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-3 text-primary">
                  <FileText className="h-6 w-6" />
                  <h2 className="text-lg font-semibold text-foreground">4. Contacting Our Data Security Officer</h2>
                </div>
                <p className="mt-3">
                  If you have questions about this Privacy Policy or wish to exercise your data access or deletion rights, please email us directly at <a href="mailto:info@canbetech.com" className="text-primary underline">info@canbetech.com</a>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
