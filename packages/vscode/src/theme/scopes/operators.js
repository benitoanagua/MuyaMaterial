export default function getOperatorSettings(scheme) {
  return {
    name: "Operators",
    scope: [
      // Aritméticos
      "keyword.operator.arithmetic",

      // Comparación
      "keyword.operator.comparison",
      "keyword.operator.relational",

      // Lógicos
      "keyword.operator.logical",

      // Asignación
      "keyword.operator.assignment",

      // Incremento/Decremento
      "keyword.operator.increment",
      "keyword.operator.decrement",

      // Bitwise
      "keyword.operator.bitwise",

      // Otros
      "keyword.operator",
    ],
    settings: {
      foreground: scheme.error,
    },
  };
}
