export default function getSupportSettings(scheme) {
  return [
    {
      name: "Framework or library provided content (for internal functions, internal classes)",
      scope: [
        "support",
        "support.class",
        "support.constant",
        "support.function",
        "support.other",
        "support.property-value",
        "support.type",
        "support.variable",
        "support.module",
      ],
      settings: {
        foreground: scheme.onSurface,
        fontStyle: "bold",
      },
    },
    {
      name: "Calling external classes, methods, modules",
      scope: ["support.class", "support.function", "support.module"],
      settings: {
        foreground: scheme.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Calling external variables, constants",
      scope: [
        "support.constant",
        "support.other",
        "support.property-value",
        "support.type",
        "support.variable",
      ],
      settings: {
        foreground: scheme.primary,
        fontStyle: "",
      },
    },
  ];
}
