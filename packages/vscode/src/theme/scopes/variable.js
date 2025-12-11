export default function getVariableSettings(scheme, term) {
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
        foreground: term.normal.yellow,
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
        foreground: term.normal.blue,
      },
    },
    {
      name: "Environment variables",
      scope: ["variable.other.environment"],
      settings: {
        foreground: term.normal.green,
      },
    },
  ];
}