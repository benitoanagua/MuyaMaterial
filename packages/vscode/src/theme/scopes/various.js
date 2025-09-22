export default function getVariousSettings(scheme) {
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
        foreground: scheme.tertiary,
      },
    },
    {
      name: "Invalid or deprecated code",
      scope: ["invalid", "invalid.illegal", "invalid.deprecated"],
      settings: {
        foreground: scheme.error,
      },
    },
    {
      name: "Documentation tags",
      scope: ["keyword.other.documentation", "entity.name.tag.documentation"],
      settings: {
        foreground: scheme.primary,
        fontStyle: "italic",
      },
    },
  ];
}
