export default function getConstantSettings(scheme) {
  return {
    name: "Various forms of constants",
    scope: [
      "constant",
      "constant.numeric",
      "constant.numeric.integer",
      "constant.numeric.integer.binary",
      "constant.numeric.integer.octal",
      "constant.numeric.integer.decimal",
      "constant.numeric.integer.hexadecimal",
      "constant.numeric.integer.other",
      "constant.numeric.float",
      "constant.numeric.float.binary",
      "constant.numeric.float.octal",
      "constant.numeric.float.decimal",
      "constant.numeric.float.hexadecimal",
      "constant.numeric.float.other",
      "constant.numeric.complex",
      "constant.numeric.complex.real",
      "constant.numeric.complex.imaginary",

      "constant.language",

      "constant.character.escape",

      "constant.other.placeholder",
      "constant.other",
    ],
    settings: {
      foreground: scheme.tertiary,
      fontStyle: "",
    },
  };
}
