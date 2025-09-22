export default function getSupportSettings(scheme) {
  return [
    {
      name: "Built-in functions and classes",
      scope: ["support.function", "support.class", "support.type"],
      settings: {
        foreground: scheme.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Constants and variables from libraries",
      scope: ["support.constant", "support.variable"],
      settings: {
        foreground: scheme.secondary,
      },
    },
  ];
}
