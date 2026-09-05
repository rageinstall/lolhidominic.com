export type CaseStudy = {
  brand: string;
  brief: string;
  idea: string;
  work: string;
  results: string;
  takeaway: string;
  href?: string;
};

const structure: { key: keyof CaseStudy; label: string }[] = [
  { key: "brief", label: "Brief" },
  { key: "idea", label: "Idea" },
  { key: "work", label: "Work" },
  { key: "results", label: "Results" },
  { key: "takeaway", label: "Takeaway" },
];

// Pass real case studies here as they're ready to publish. Leave empty rather
// than filling this in with invented brands, deliverables, or results.
export default function CampaignShowcase({ caseStudies = [] }: { caseStudies?: CaseStudy[] }) {
  if (caseStudies.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-surface p-8 md:p-12">
        <p className="font-display text-xl font-bold text-white md:text-2xl">
          Case studies are on their way.
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
          This space is reserved for real campaign work — brief, idea, work, results, and
          takeaway — as it becomes ready to share.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {caseStudies.map((study) => (
        <article key={study.brand} className="rounded-2xl border border-white/10 bg-surface p-7 md:p-9">
          <h3 className="font-display text-2xl font-black text-white">{study.brand}</h3>
          <dl className="mt-6 space-y-4">
            {structure.map(({ key, label }) => (
              <div key={key}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-flame">{label}</dt>
                <dd className="mt-1 leading-relaxed text-ink-muted">{study[key]}</dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </div>
  );
}
