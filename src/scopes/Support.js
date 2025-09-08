export default function getSupportSettings(scheme) {
  return [
    {
      name: "Support classes and functions",
      scope: ["support.class", "support.function", "support.type"],
      settings: {
        foreground: scheme.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Support constants and variables",
      scope: ["support.constant", "support.variable"],
      settings: {
        foreground: scheme.primary,
      },
    },
  ];
}
