import type { PostMeta } from "@/lib/post-types";

export default function ReviewWidget({ post }: { post: PostMeta }) {
  const hasReview = post.reviewScore || post.timeInvestment || post.vibe;
  const hasFlavor = post.flavorProfile || post.potency || post.pairing || post.terpenes;

  if (!hasReview && !hasFlavor) {
    return null;
  }

  return (
    <div className="mt-6 overflow-hidden rounded-[26px] border border-white/10 bg-[#090d14]/95 p-4 text-sm text-ink-soft shadow-[0_20px_80px_-50px_rgba(0,0,0,0.55)]">
      <div className="grid gap-3 sm:grid-cols-3">
        {hasReview ? (
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink-faint">Score</p>
            <p className="mt-3 text-3xl font-display font-black text-paper">{post.reviewScore ?? "—"}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-ink-muted">/10</p>
          </div>
        ) : null}

        {hasReview ? (
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink-faint">Vibe check</p>
            <p className="mt-3 text-base font-semibold text-paper">{post.vibe ?? "Low-key"}</p>
          </div>
        ) : null}

        {(hasReview || hasFlavor) ? (
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink-faint">
              {hasReview ? "Time investment" : "Pairing"}
            </p>
            <p className="mt-3 text-base font-semibold text-paper">
              {hasReview
                ? post.timeInvestment ?? "Flexible session"
                : post.pairing ?? post.terpenes ?? "Best with a late-night run"}
            </p>
          </div>
        ) : null}
      </div>

      {hasFlavor && !hasReview ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {post.flavorProfile ? (
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink-faint">Flavor profile</p>
              <p className="mt-2 text-base font-semibold text-paper">{post.flavorProfile}</p>
            </div>
          ) : null}
          {post.potency || post.terpenes ? (
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink-faint">Potency / terpenes</p>
              <p className="mt-2 text-base font-semibold text-paper">{post.potency ?? post.terpenes}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
