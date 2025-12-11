export default function getMetaSettings(scheme, term) {
  return {
    name: "Meta programming and complex structures",
    scope: [
      "meta.class",
      "meta.function",
      "meta.method-call",
      "meta.function-call",
      "meta.tag",
      "meta.brace",
      "meta.group",
    ],
    settings: {
      foreground: scheme.onSurfaceVariant,
    },
  };
}