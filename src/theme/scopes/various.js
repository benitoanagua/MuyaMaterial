export default function getVariousSettings(scheme) {
  return [
    {
      name: "Meta scopes are used for larger code or markup portions, often containing the complete contents of multiple more specific scope data structures",
      scope: [],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "",
      },
    },
    {
      name: "Brackets and the like",
      scope: [
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.separator.continuation",
        "punctuation.accessor",
      ],
      settings: {
        foreground: scheme.onSurfaceVariant,
        fontStyle: "",
      },
    },
    {
      name: "source applied to the entire source code file",
      scope: ["source"],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "",
      },
    },
    {
      name: "text",
      scope: ["text.html", "text.xml"],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "",
      },
    },
    {
      name: "Illegal content",
      scope: ["invalid", "invalid.illegal", "invalid.deprecated"],
      settings: {
        foreground: scheme.error,
        fontStyle: "underline",
      },
    },
    {
      name: "brackets of XML/HTML tags",
      scope: [
        "punctuation.definition.tag",
        "punctuation.definition.annotation",
        "punctuation.section.block.begin",
        "punctuation.section.block.end",
        "punctuation.section.braces.begin",
        "punctuation.section.braces.end",
        "punctuation.section.group.begin",
        "punctuation.section.group.end",
        "punctuation.section.parens.begin",
        "punctuation.section.parens.end",
        "punctuation.section.brackets.begin",
        "punctuation.section.brackets.end",
        "punctuation.definition.generic.begin",
        "punctuation.definition.generic.end",
      ],
      settings: {
        foreground: scheme.tertiary,
      },
    },
  ];
}
