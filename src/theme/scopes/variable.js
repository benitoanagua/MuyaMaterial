export default function getVariableSettings(scheme) {
  return [
    {
      name: "Local variables",
      scope: ["variable", "variable.other"],
      settings: {
        foreground: scheme.onSurface,
      },
    },
    {
      name: "Function parameters",
      scope: ["variable.parameter"],
      settings: {
        foreground: scheme.tertiary,
      },
    },
    {
      name: "Object properties and members",
      scope: ["variable.other.member", "variable.other.property"],
      settings: {
        foreground: scheme.secondary,
      },
    },
    {
      name: "Language-specific variables (this, self, etc.)",
      scope: ["variable.language"],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "italic",
      },
    },
  ];
}
