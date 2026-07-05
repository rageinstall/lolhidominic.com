import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Press, brand inquiries, and general questions. Dominic reads every email himself.",
  openGraph: {
    title: `Contact | ${site.shortName}`,
    description: "Press, brand inquiries, and general questions.",
    url: `${site.url}/contact`,
    type: "website",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">Get in touch</p>
          <h1 className="font-display text-display-md font-black text-ink dark:text-paper">
            Let&rsquo;s actually talk.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70 dark:text-paper/70">
            I read every message myself. If it needs a reply, you&rsquo;ll hear back in a few days,
            not from an autoresponder.
          </p>

          <div className="mt-10 space-y-5 border-t border-ink/10 pt-8 dark:border-paper/10">
            <div>
              <p className="font-display text-sm font-bold text-ink dark:text-paper">Press &amp; interview requests</p>
              <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
                For journalists, producers, and podcasters. Include your outlet, timeline, and
                what you&rsquo;re working on.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink dark:text-paper">Brand inquiries</p>
              <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
                Sponsorships, affiliates, and content partnerships. Read the{" "}
                <a href="/work-with-me" className="text-flame hover:underline">
                  Work With Me
                </a>{" "}
                page first, then come back here.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink dark:text-paper">Everything else</p>
              <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
                A question about something I wrote, feedback, or something that doesn&rsquo;t fit
                the other categories. Send it.
              </p>
            </div>
            <p className="pt-2 text-sm text-ink/50 dark:text-paper/50">
              Direct email:{" "}
              <a href={`mailto:${site.email}`} className="text-flame hover:underline">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
