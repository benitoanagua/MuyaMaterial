export default function getVariableSettings(scheme) {
  return [
    {
      name: "Variables",
      scope: ["variable", "variable.other", "variable.parameter"],
      settings: {
        foreground: scheme.onBackground,
      },
    },
    {
      name: "Language variables",
      scope: ["variable.language"],
      settings: {
        foreground: scheme.onBackground,
        fontStyle: "italic",
      },
    },
  ];
}
