export default function getStringSettings(scheme) {
  return {
    name: "Strings",
    scope: [
      "string",
      "string.quoted",
      "string.quoted.single",
      "string.quoted.double",
      "string.quoted.triple",
      "string.quoted.other",

      "meta.string",
      "punctuation.definition.string.begin",
      "punctuation.definition.string.end",

      "string.quoted.unquoted",
      "string.quoted.regexp",

      "meta.interpolated",
      "punctuation.section.interpolation.begin",
      "punctuation.section.interpolation.end",

      "source.language-suffix.embedded",
    ],
    settings: {
      foreground: scheme.tertiary,
      fontStyle: "",
    },
  };
}
