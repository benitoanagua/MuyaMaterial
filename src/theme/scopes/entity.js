export default function getEntitySettings(scheme) {
  return [
    {
      name: "Entities, which refer to larger chunks of documents, such as chapters, classes, functions, or tags.",
      scope: [
        "entity.name.class",
        "entity.name.struct",
        "entity.name.enum",
        "entity.name.union",
        "entity.name.trait",
        "entity.name.interface",
        "entity.name.impl",
        "entity.name.type",
        "entity.name.class.ford-decl",
        "entity.other.inherited-class",
        "entity.name.function.constructor",
        "entity.name.function.destructor",
        "entity.name.namespace",
        "entity.name.constant",
        "entity.name.label",
        "entity.name.tag",
        "entity.name.section",
        "entity.other.attribute-name",
      ],
      settings: {
        foreground: scheme.primary,
        fontStyle: "bold",
      },
    },
    {
      name: "Methods and functions in classes",
      scope: [
        "entity.name.function",
        "entity.name.function.constructor",
        "entity.name.function.destructor",
      ],
      settings: {
        foreground: scheme.primary,
        fontStyle: "italic",
      },
    },
  ];
}
