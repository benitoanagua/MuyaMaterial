export default function getStorageSettings(scheme) {
  return {
    name: "Storage types and modifiers",
    scope: ["storage", "storage.type", "storage.modifier"],
    settings: {
      foreground: scheme.secondary,
    },
  };
}
