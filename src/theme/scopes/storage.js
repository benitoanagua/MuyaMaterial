export default function getStorageSettings(scheme) {
  return {
    name: "Storage-related keywords",
    scope: [
      "storage",
      "storage.type",
      "storage.modifier",
      "storage.type.function",
      "storage.type.class",
      "storage.type.struct",
      "storage.type.enum",
      "storage.type.union",
      "storage.type.trait",
      "storage.type.interface",
      "storage.type.impl",
      "storage.type keyword.declaration.type",
    ],
    settings: {
      foreground: scheme.secondary,
      fontStyle: "",
    },
  };
}
