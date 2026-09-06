import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dominic Pérignon for brand partnerships, creative projects, collaborations, or a simple hello.",
  openGraph: {
    title: `Contact | ${site.shortName}`,
    description: "Brand partnerships, creative projects, collaborations, or just saying hi.",
    url: `${site.url}/contact`,
    type: "website",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="eyebrow mb-5">Contact · T-Time Media LLC</p>
        <h1 className="max-w-5xl font-display text-[clamp(4rem,10vw,8rem)] font-black leading-[0.86] tracking-[-0.06em]">Have something<br /><span className="text-blue">in mind?</span></h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">Brand partnerships, creative projects, collaborations, press, or just saying hi. Start here.</p>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow mb-6">Start a conversation</p>
          <div className="space-y-6 text-ink-muted">
            <div><h2 className="font-display text-xl font-bold">Brand partnerships</h2><p className="mt-2 leading-relaxed">Tell me about the brand, the campaign, what you want to make, and why you think it fits.</p></div>
            <div><h2 className="font-display text-xl font-bold">Creative projects</h2><p className="mt-2 leading-relaxed">Have an idea that needs a storyteller, creator, producer, or collaborator? I want to hear it.</p></div>
            <div><h2 className="font-display text-xl font-bold">Just say hi</h2><p className="mt-2 leading-relaxed">Not every conversation needs a brief. Send the message.</p></div>
          </div>
          <div className="mt-10 border-t border-black/10 pt-6"><p className="text-xs uppercase tracking-[0.14em] text-ink-faint">Direct email</p><a href={`mailto:${site.email}`} className="mt-2 inline-block text-lg font-semibold text-blue hover:underline">{site.email}</a></div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-surface p-6 md:p-10"><ContactForm /></div>
      </section>
    </div>
  );
}
