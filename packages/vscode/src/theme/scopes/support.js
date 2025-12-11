export default function getSupportSettings(scheme, term) {
  return [
    {
      name: "Built-in functions and classes",
      scope: ["support.function", "support.class", "support.type"],
      settings: {
        foreground: term.normal.cyan,
        fontStyle: "bold",
      },
    },
    {
      name: "Constants and variables from libraries",
      scope: ["support.constant", "support.variable"],
      settings: {
        foreground: term.normal.magenta,
      },
    },
  ];
}