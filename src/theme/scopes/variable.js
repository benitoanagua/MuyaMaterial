export default function getVariableSettings(scheme) {
  return [
    {
      name: "Variables, Parameters",
      scope: [
        "variable",
        "variable.other",
        "variable.other.readwrite",

        "punctuation.definition.variable",
        "variable.other.constant",
        "variable.language",

        "variable.parameter",

        "variable.other.member",
        "variable.function",
        "variable.annotation",
        "punctuation.definition.annotation",
      ],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "",
      },
    },
    {
      name: "Language reserved variables, such as this, super, self, etc.",
      scope: ["variable.language"],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "italic",
      },
    },
    {
      name: "Fields, properties, members of classes or other data structures",
      scope: ["variable.other", "variable.other.member"],
      settings: {
        foreground: scheme.secondary,
        fontStyle: "",
      },
    },
    {
      name: "Passed parameters of functions",
      scope: ["variable.parameter"],
      settings: {
        foreground: scheme.tertiary,
        fontStyle: "",
      },
    },
  ];
}
