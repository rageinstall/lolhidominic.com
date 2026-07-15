"use client";

import type { Dispatch, SetStateAction } from "react";

const filters = [
  { key: "all", label: "All Stories", accent: "border-white/15 bg-white/5 text-ink" },
  { key: "roam", label: "✈️ Roam", accent: "border-amber/30 bg-amber/10 text-amber" },
  { key: "munch", label: "🍕 Munch", accent: "border-matcha/30 bg-matcha/10 text-matcha" },
  { key: "screen", label: "🎬 Screen", accent: "border-white/20 bg-surface-2 text-ink-soft" },
  { key: "elevate", label: "🌿 Elevate", accent: "border-matcha/30 bg-matcha/10 text-matcha" },
  { key: "play", label: "🎮 Play", accent: "border-cyber/30 bg-cyber/10 text-cyber" },
];

export default function CategoryTabs({
  active,
  setActive,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="sticky top-4 z-20 mb-6 flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-surface/95 px-4 py-3 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-faint">Choose your strain</span>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => {
          const isActive = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? `${filter.accent} border-current shadow-[0_10px_50px_-40px_rgba(255,255,255,0.35)]`
                  : "border-white/10 bg-white/5 text-ink-soft hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
