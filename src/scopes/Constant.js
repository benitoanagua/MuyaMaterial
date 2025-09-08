export default function getConstantSettings(scheme) {
  return {
    name: "Constants",
    scope: [
      "constant",
      "constant.numeric",
      "constant.language",
      "constant.character.escape",
      "constant.other",
    ],
    settings: {
      foreground: scheme.tertiary,
    },
  };
}
