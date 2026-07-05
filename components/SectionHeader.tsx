type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  as?: "h1" | "h2";
  gradient?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  align = "left",
  children,
  as = "h2",
  gradient = false,
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className="eyebrow mb-3 text-ink-faint">{eyebrow}</p>
      ) : null}
      <Heading
        className={`font-display font-semibold tracking-tight text-balance ${
          gradient ? "title-gradient" : "text-ink"
        }`}
        style={{
          fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
          lineHeight: "1.06",
          letterSpacing: "-0.025em",
        }}
      >
        {title}
      </Heading>
      {children ? (
        <div
          className={`mt-4 max-w-prose font-sans text-lg leading-relaxed text-ink-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
