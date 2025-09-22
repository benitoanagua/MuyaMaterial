export default function getKeywordSettings(scheme) {
  return {
    name: "Keywords and operators",
    scope: [
      "keyword",
      "keyword.control",
      "keyword.control.conditional",
      "keyword.control.loop",
      "keyword.control.import",
      "keyword.operator",
      "keyword.other",
    ],
    settings: {
      foreground: scheme.secondary,
    },
  };
}
