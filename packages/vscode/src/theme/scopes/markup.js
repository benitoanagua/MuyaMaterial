export default function getMarkupSettings(scheme) {
  return [
    {
      name: "Markdown and documentation",
      scope: [
        "markup.heading",
        "markup.bold",
        "markup.italic",
        "markup.quote",
        "markup.raw",
      ],
      settings: {
        foreground: scheme.onSurface,
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
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
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
  ];
}
