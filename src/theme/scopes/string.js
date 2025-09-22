export default function getStringSettings(scheme) {
  return {
    name: "Strings and text",
    scope: [
      "string",
      "string.quoted.single",
      "string.quoted.double",
      "string.quoted.triple",
      "string.regexp",
      "string.template",
      "punctuation.definition.string",
    ],
    settings: {
      foreground: scheme.tertiary,
    },
  };
}
