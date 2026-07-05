import type { MDXComponents } from "mdx/types";

// Maps MDX elements to the editorial prose styles. The wrapper in the
// [slug] page already applies .prose-editorial, so most elements inherit
// styling. Override here only where MDX needs explicit components.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
