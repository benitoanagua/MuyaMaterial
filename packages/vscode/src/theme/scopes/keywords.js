export default function getKeywordSettings(scheme, term) {
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
      foreground: term.normal.blue,
    },
  };
}