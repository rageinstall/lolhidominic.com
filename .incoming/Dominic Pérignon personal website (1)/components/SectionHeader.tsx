type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  children?: React.ReactNode; // optional supporting line or action
  as?: "h1" | "h2";
};

export default function SectionHeader({
  eyebrow,
  title,
  align = "left",
  children,
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Heading className="font-display text-display-md font-extrabold text-ink dark:text-paper text-balance">
        {title}
      </Heading>
      {children ? (
        <div
          className={`mt-4 max-w-prose text-lg leading-relaxed text-ink/70 dark:text-paper/70 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
