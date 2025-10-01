export default function getVariableSettings(scheme) {
  return [
    {
      name: "Local variables",
      scope: ["variable", "variable.other", "variable.other.readwrite"],
      settings: {
        foreground: scheme.onSurface,
      },
    },
    {
      name: "Function parameters",
      scope: ["variable.parameter", "variable.parameter.function"],
      settings: {
        foreground: scheme.tertiary,
      },
    },
    {
      name: "Object properties and members",
      scope: [
        "variable.other.member",
        "variable.other.property",
        "variable.other.object.property",
      ],
      settings: {
        foreground: scheme.secondary,
      },
    },
    {
      name: "Language-specific variables (this, self, etc.)",
      scope: [
        "variable.language",
        "variable.language.this",
        "variable.language.super",
      ],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "italic",
      },
    },
    {
      name: "Constant variables",
      scope: ["variable.other.constant", "variable.other.enummember"],
      settings: {
        foreground: scheme.tertiary,
      },
    },
  ];
}
