import type { ReactNode } from "react";

const coverThemes: Record<string, string> = {
  "Media Literacy": "from-[#5BCEFA]/20 via-[#8C4DFF]/14 to-[#07090D]/100",
  "Internet Culture": "from-[#8C4DFF]/20 via-[#4CFF8D]/12 to-[#07090D]/100",
  "Trans Life": "from-[#FFB25C]/20 via-[#FF4A1C]/14 to-[#07090D]/100",
  "Travel & Safety": "from-[#4CFF8D]/18 via-[#FFB25C]/14 to-[#07090D]/100",
  Representation: "from-[#8C4DFF]/18 via-[#F5A9B8]/14 to-[#07090D]/100",
};

type CoverWaveProps = {
  category: string;
  className?: string;
  children?: ReactNode;
};

export default function CoverWave({ category, className = "", children }: CoverWaveProps) {
  const theme = coverThemes[category] ?? "from-[#111827]/80 to-[#05060A]/100";

  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br ${theme} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,178,92,0.1),transparent_35%)]" />
      <div className="absolute -left-16 top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 top-16 h-44 w-44 rounded-full bg-cyber/20 blur-3xl" />
      <div className="absolute left-14 bottom-6 h-32 w-72 rounded-full bg-matcha/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#05060A] via-[#05060A]/30 to-transparent" />
      {children}
    </div>
  );
}
