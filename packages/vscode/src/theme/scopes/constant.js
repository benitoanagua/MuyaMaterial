export default function getConstantSettings(scheme) {
  return {
    name: "Constants and numeric values",
    scope: [
      "constant",
      "constant.numeric",
      "constant.numeric.integer",
      "constant.numeric.float",
      "constant.numeric.hex",
      "constant.numeric.octal",
      "constant.numeric.binary",
      "constant.language",
      "constant.character.escape",
      "constant.other.placeholder",
      "constant.other",
    ],
    settings: {
      foreground: scheme.tertiary,
    },
  };
}
