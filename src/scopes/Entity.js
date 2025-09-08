export default function getEntitySettings(scheme) {
  return [
    {
      name: "Entities",
      scope: [
        "entity.name.class",
        "entity.name.struct",
        "entity.name.enum",
        "entity.name.interface",
        "entity.name.type",
        "entity.name.namespace",
      ],
      settings: {
        foreground: scheme.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Functions and Methods",
      scope: ["entity.name.function", "entity.name.function.constructor"],
      settings: {
        foreground: scheme.primary,
        fontStyle: "italic",
      },
    },
  ];
}
