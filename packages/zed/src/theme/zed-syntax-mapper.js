export class ZedSyntaxMapper {
  static mapSchemeToSyntax(scheme) {
    return {
      // Palabras clave
      keyword: {
        color: scheme.secondary,
        font_style: "normal",
      },
      "keyword.control": {
        color: scheme.secondary,
        font_style: "normal",
      },
      "keyword.operator": {
        color: scheme.secondary,
        font_style: "normal",
      },

      // Tipos y clases
      type: {
        color: scheme.primary,
        font_style: "bold",
      },
      "type.builtin": {
        color: scheme.primary,
        font_style: "bold",
      },
      class: {
        color: scheme.primary,
        font_style: "bold",
      },
      struct: {
        color: scheme.primary,
        font_style: "bold",
      },
      enum: {
        color: scheme.primary,
        font_style: "bold",
      },
      interface: {
        color: scheme.primary,
        font_style: "bold",
      },

      // Funciones
      function: {
        color: scheme.primary,
        font_style: "italic",
      },
      "function.builtin": {
        color: scheme.primary,
        font_style: "bold",
      },
      "function.method": {
        color: scheme.primary,
        font_style: "italic",
      },
      "function.macro": {
        color: scheme.primary,
        font_style: "italic",
      },

      // Variables
      variable: {
        color: scheme.onSurface,
      },
      "variable.parameter": {
        color: scheme.tertiary,
      },
      "variable.builtin": {
        color: scheme.onSurface,
        font_style: "italic",
      },
      "variable.other.member": {
        color: scheme.secondary,
      },

      // Constantes
      constant: {
        color: scheme.tertiary,
      },
      "constant.builtin": {
        color: scheme.tertiary,
        font_style: "bold",
      },
      "constant.numeric": {
        color: scheme.tertiary,
      },
      "constant.character": {
        color: scheme.tertiary,
      },

      // Strings
      string: {
        color: scheme.tertiary,
      },
      "string.regexp": {
        color: scheme.tertiary,
      },
      "string.special": {
        color: scheme.tertiary,
      },

      // Comentarios
      comment: {
        color: scheme.outline,
        font_style: "italic",
      },
      "comment.documentation": {
        color: scheme.outline,
        font_style: "italic",
      },

      // Atributos y propiedades
      attribute: {
        color: scheme.secondary,
      },
      property: {
        color: scheme.secondary,
      },

      // Etiquetas (HTML/XML)
      tag: {
        color: scheme.primary,
      },
      "tag.attribute": {
        color: scheme.secondary,
      },

      // Operadores
      operator: {
        color: scheme.secondary,
      },

      // Puntuación
      punctuation: {
        color: scheme.onSurfaceVariant,
      },
      "punctuation.bracket": {
        color: scheme.tertiary,
      },
      "punctuation.delimiter": {
        color: scheme.onSurfaceVariant,
      },

      // Soporte
      support: {
        color: scheme.primary,
        font_style: "bold",
      },
      "support.function": {
        color: scheme.primary,
        font_style: "bold",
      },
      "support.type": {
        color: scheme.primary,
        font_style: "bold",
      },

      // Entidades
      entity: {
        color: scheme.primary,
      },
      "entity.name": {
        color: scheme.primary,
      },

      // Marcado
      "markup.heading": {
        color: scheme.primary,
        font_style: "bold",
      },
      "markup.bold": {
        color: scheme.onSurface,
        font_style: "bold",
      },
      "markup.italic": {
        color: scheme.onSurface,
        font_style: "italic",
      },
      "markup.link": {
        color: scheme.primary,
      },
      "markup.quote": {
        color: scheme.secondary,
      },
      "markup.raw": {
        color: scheme.tertiary,
      },

      // Diferencias
      "diff.added": {
        color: scheme.secondary,
      },
      "diff.removed": {
        color: scheme.error,
      },
      "diff.changed": {
        color: scheme.tertiary,
      },

      // Invalidos
      invalid: {
        color: scheme.error,
      },
      "invalid.illegal": {
        color: scheme.error,
        background_color: `${scheme.error}20`,
      },

      // Enfatizado
      emphasis: {
        font_style: "italic",
      },
      strong: {
        font_weight: 700,
      },

      // Subrayado
      underline: {
        text_decoration: "underline",
      },

      // Tachado
      strike: {
        text_decoration: "line-through",
      },
    };
  }
}
