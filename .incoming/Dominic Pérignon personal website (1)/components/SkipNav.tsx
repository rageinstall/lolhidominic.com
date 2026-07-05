export default function SkipNav() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:bg-ink focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:uppercase focus:tracking-label focus:text-paper"
    >
      Skip to content
    </a>
  );
}
