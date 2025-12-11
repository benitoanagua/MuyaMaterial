export default function getStorageSettings(scheme, term) {
  return {
    name: "Storage types and modifiers",
    scope: ["storage", "storage.type", "storage.modifier"],
    settings: {
      foreground: term.normal.magenta,
    },
  };
}