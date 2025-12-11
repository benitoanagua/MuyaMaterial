export default function getVariousSettings(scheme, term) {
  return [
    {
      name: "Punctuation and syntax symbols",
      scope: [
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor",
      ],
      settings: {
        foreground: scheme.onSurfaceVariant,
      },
    },
    {
      name: "Brackets and braces",
      scope: [
        "punctuation.definition.tag",
        "punctuation.section.brace",
        "punctuation.section.paren",
        "punctuation.section.bracket",
      ],
      settings: {
        foreground: term.normal.blue,
      },
    },
    {
      name: "Invalid syntax",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: scheme.onError,
        background: scheme.errorContainer,
      },
    },
    {
      name: "Deprecated elements",
      scope: ["invalid.deprecated"],
      settings: {
        foreground: scheme.onErrorContainer,
        background: scheme.error,
      },
    },
  ];
}