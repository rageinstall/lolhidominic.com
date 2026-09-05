import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "DC Pride → WorldPride DC",
  description: "A two-year creator case study following Dominic’s DC Pride 2024 and WorldPride DC 2025 storytelling.",
  openGraph: {
    title: `DC Pride → WorldPride DC | ${site.shortName}`,
    description: "Two years. One evolving story.",
    url: `${site.url}/work/dc-pride-worldpride`,
    type: "website",
  },
  alternates: { canonical: "/work/dc-pride-worldpride" },
};

const stats2024 = [
  ["36K", "views", "“hi my name is anxiety.” reel"],
  ["20K", "views", "Capital Pride experience reel"],
  ["5.0K", "likes", "June 9 photo post"],
];

const stats2025 = [
  ["199K+", "documented views", "Five supplied posts/reels with visible view counts"],
  ["75.5K", "views", "“you brought your ma’s” post"],
  ["44,191", "views", "World Pride 2025 carousel/post"],
  ["42,978", "views", "“No audio needed” reel"],
];

export default function DcPrideWorldPridePage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <Link href="/work-with-me" className="eyebrow inline-block text-ink-muted transition hover:text-blue">← Back to work</Link>
        <p className="eyebrow mb-5 mt-12 text-blue">Flagship case study · 2024 → 2025</p>
        <h1 className="max-w-6xl font-display text-[clamp(3.8rem,9vw,8rem)] font-black leading-[0.86] tracking-[-0.06em] text-white">
          DC Pride <span className="text-blue">→</span><br />WorldPride DC
        </h1>
        <p className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-tight text-white md:text-3xl">Two years. One evolving story.</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">Pride wasn’t just something I covered. It became a story I got to return to.</p>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow mb-4">The brief</p><h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">A return to DC Pride.</h2></div>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>In 2024, Dominic documented DC Pride through personal, candid social content — from the energy of the celebration to the quieter emotional moments around friendship, anxiety, and being present in community.</p>
            <p>The 2024 campaign brief is not included in the supplied materials, so this case study only makes claims supported by the actual posts and performance screenshots.</p>
            <p>In 2025, the opportunity grew with WorldPride DC. The supplied influencer toolkit framed Washington, DC as the host of WorldPride from May 17 through June 8, 2025, with more than 2 million expected attendees, 500 parade contingents, 200 associated events, and the 50th anniversary of Capital Pride.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><p className="eyebrow mb-4 text-blue">01 · 2024</p><h2 className="font-display text-5xl font-black text-white md:text-7xl">DC Pride</h2></div>
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">The first chapter was intimate and personal: friendship, identity, joy, anxiety, and the feeling of experiencing Capital Pride for the first time.</p>
          </div>
          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {stats2024.map(([value, label, detail]) => <Metric key={detail} value={value} label={label} detail={detail} />)}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <StoryCard title="A personal point of view" body="The June 12 reel, “hi my name is anxiety.”, paired the Pride environment with an honest emotional hook and reached 36K views, 855 likes, 21 comments, and 24 saves in the supplied Instagram insights." />
            <StoryCard title="Friendship as the story" body="A June 26 reel about experiencing Capital Pride with a best friend reached 20K views, 592 likes, 20 comments, and 24 saves. The accompanying post also shows 20.1K views." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow mb-4 text-blue">02 · 2025</p><h2 className="font-display text-5xl font-black text-white md:text-7xl">WorldPride DC</h2></div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>The second chapter had a much larger cultural backdrop. The 2025 toolkit called for pre-event posts focused on engagement and ticket sales, during-event coverage of experiences and behind-the-scenes moments, and a post-event recap designed to extend visibility beyond Pride weekend. It also called for promotion of the Human Rights Conference and Capital Pride Honors.</p>
            <p>Dominic’s supplied content shows that scale without losing the personal lens: Trans Pride, the parade and festival atmosphere, bringing his moms to WorldPride, quieter moments between events, and a direct statement about trans visibility and resistance.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {stats2025.map(([value, label, detail]) => <Metric key={detail} value={value} label={label} detail={detail} />)}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <StoryCard title="The strongest reach" body="The June 9 post showing Dominic bringing his moms to WorldPride/Capital Pride shows 75.5K views, 998 likes, 17 comments, and 11 sends in the supplied Instagram screen." />
          <StoryCard title="Information + emotion" body="The June 3 World Pride 2025 post reached 44,191 views and recorded 1,186 interactions. Other supplied reels reached 42,978, 18,772, and 18,527 views respectively." />
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-5 text-blue">The throughline</p>
          <blockquote className="max-w-5xl font-display text-4xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">Pride wasn’t just something I covered. It became a story I got to return to.</blockquote>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <StoryCard title="2024 · Be present" body="The first chapter centered on what Pride felt like from inside the experience: friendship, anxiety, celebration, and discovering a new community moment." />
            <StoryCard title="2025 · Go deeper" body="A year later, the storytelling expanded with more formats and a larger event, while staying rooted in real relationships and lived experience." />
            <StoryCard title="The result" body="The strongest pieces do not feel like event announcements. They feel like moments the audience is being invited into." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-5">What this says about the work</p>
        <h2 className="max-w-4xl font-display text-5xl font-black leading-none text-white md:text-7xl">Personal storytelling can carry institutional moments.</h2>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-muted">Across the two years, the creative value is the perspective: a transmasculine creator documenting Pride as something lived, not simply promoted. That lets the work hold information, emotion, humor, friendship, community, and advocacy at the same time.</p>
      </section>

      <section className="bg-blue px-6 py-20 text-bg md:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">More work</p>
          <h2 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">Let’s make something people actually want to watch.</h2>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-bg px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Work with Dominic →</Link>
        </div>
      </section>
    </div>
  );
}

function Metric({ value, label, detail }: { value: string; label: string; detail: string }) {
  return <div className="bg-bg p-7 md:p-8"><p className="font-display text-4xl font-black text-white md:text-5xl">{value}</p><p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue">{label}</p><p className="mt-4 text-sm leading-relaxed text-ink-muted">{detail}</p></div>;
}

function StoryCard({ title, body }: { title: string; body: string }) {
  return <div className="border border-white/10 bg-bg p-7 md:p-8"><h3 className="font-display text-2xl font-black text-white">{title}</h3><p className="mt-4 leading-relaxed text-ink-muted">{body}</p></div>;
}
