export default function getMarkupSettings(scheme) {
  return [
    {
      name: "markup scopes are used for content, not code (including syntaxes like Markdown and Textile)",
      scope: [
        "markup.heading",
        "markup.list.numbered",
        "markup.list.unnumbered",

        "markup.bold",
        "markup.italic",
        "markup.underline",

        "markup.inserted",
        "markup.deleted",

        "markup.underline.link",
        "markup.quote",

        "markup.raw.inline",
        "markup.raw.block",

        "markup.other",
      ],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "",
      },
    },
    {
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: scheme.secondary,
      },
    },
    {
      scope: "markup.heading",
      settings: {
        fontStyle: "bold",
        foreground: scheme.primary,
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: scheme.secondary,
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: scheme.error,
      },
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: scheme.tertiary,
      },
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: scheme.tertiary,
      },
    },
    {
      name: "brackets of XML/HTML tags",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: scheme.tertiary,
      },
    },
  ];
}
