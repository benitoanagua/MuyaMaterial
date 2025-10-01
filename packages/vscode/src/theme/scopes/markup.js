export default function getMarkupSettings(scheme) {
  return [
    {
      name: "Markdown headings",
      scope: [
        "markup.heading",
        "markup.heading.setext",
        "entity.name.section.markdown",
      ],
      settings: {
        fontStyle: "bold",
        foreground: scheme.primary,
      },
    },
    {
      name: "Markdown bold",
      scope: ["markup.bold", "punctuation.definition.bold"],
      settings: {
        fontStyle: "bold",
        foreground: scheme.secondary,
      },
    },
    {
      name: "Markdown italic",
      scope: ["markup.italic", "punctuation.definition.italic"],
      settings: {
        fontStyle: "italic",
        foreground: scheme.onSurface,
      },
    },
    {
      name: "Markdown quote",
      scope: ["markup.quote", "punctuation.definition.quote.begin.markdown"],
      settings: {
        foreground: scheme.onSurfaceVariant,
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown inline code",
      scope: ["markup.inline.raw", "markup.raw.inline"],
      settings: {
        foreground: scheme.tertiary,
      },
    },
    {
      name: "Markdown code block",
      scope: ["markup.raw.block", "markup.fenced_code.block"],
      settings: {
        foreground: scheme.onSurface,
      },
    },
    {
      name: "Markdown link",
      scope: ["markup.underline.link", "string.other.link.title.markdown"],
      settings: {
        foreground: scheme.primary,
      },
    },
    {
      name: "Markdown inserted (diff)",
      scope: "markup.inserted",
      settings: {
        foreground: scheme.secondary,
      },
    },
    {
      name: "Markdown deleted (diff)",
      scope: "markup.deleted",
      settings: {
        foreground: scheme.error,
      },
    },
    {
      name: "Markdown changed",
      scope: "markup.changed",
      settings: {
        foreground: scheme.tertiary,
      },
    },
    {
      name: "Markdown list marker",
      scope: [
        "punctuation.definition.list.begin.markdown",
        "markup.list.unnumbered",
        "markup.list.numbered",
      ],
      settings: {
        foreground: scheme.secondary,
      },
    },
  ];
}
