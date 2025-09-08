export default function getKeywordSettings(scheme) {
  return {
    name: "Keywords",
    scope: [
      "keyword",
      "keyword.control",
      "keyword.control.conditional",
      "keyword.control.import",

      "punctuation.definition.keyword",

      "keyword.operator",
      "keyword.operator.assignment",
      "keyword.operator.arithmetic",
      "keyword.operator.bitwise",
      "keyword.operator.logical",
      "keyword.operator.word",

      "keyword.other",
    ],
    settings: {
      foreground: scheme.secondary,
      fontStyle: "",
    },
  };
}
