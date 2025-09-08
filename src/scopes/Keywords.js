export default function getKeywordSettings(scheme) {
  return {
    name: "Keywords",
    scope: ["keyword", "keyword.control", "keyword.operator", "keyword.other"],
    settings: {
      foreground: scheme.secondary,
    },
  };
}
