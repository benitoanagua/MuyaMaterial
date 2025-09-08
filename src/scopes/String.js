export default function getStringSettings(scheme) {
  return {
    name: "Strings",
    scope: [
      "string",
      "string.quoted",
      "string.quoted.single",
      "string.quoted.double",
      "punctuation.definition.string",
    ],
    settings: {
      foreground: scheme.tertiary,
    },
  };
}
