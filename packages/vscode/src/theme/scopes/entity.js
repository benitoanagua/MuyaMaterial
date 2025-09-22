export default function getEntitySettings(scheme) {
  return [
    {
      name: "Class names, types, and structural entities",
      scope: [
        "entity.name.class",
        "entity.name.struct",
        "entity.name.enum",
        "entity.name.interface",
        "entity.name.type",
        "entity.name.namespace",
        "entity.name.tag",
      ],
      settings: {
        foreground: scheme.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Function and method names",
      scope: [
        "entity.name.function",
        "entity.name.function.constructor",
        "entity.name.method",
      ],
      settings: {
        foreground: scheme.primary,
        fontStyle: "italic",
      },
    },
  ];
}
