export class ZedSyntaxMapper {
  static mapSchemeToSyntax(scheme) {
    return {
      // Language constructs
      ...this.mapKeywordSyntax(scheme),
      ...this.mapTypeSyntax(scheme),
      ...this.mapFunctionSyntax(scheme),
      ...this.mapVariableSyntax(scheme),
      ...this.mapConstantSyntax(scheme),
      ...this.mapStringSyntax(scheme),
      ...this.mapCommentSyntax(scheme),

      // Markup and structure
      ...this.mapMarkupSyntax(scheme),
      ...this.mapPunctuationSyntax(scheme),
      ...this.mapSupportSyntax(scheme),

      // Special constructs
      ...this.mapSpecialSyntax(scheme),
    };
  }

  static mapKeywordSyntax(scheme) {
    const baseStyle = {
      color: scheme.secondary,
      font_style: "normal",
      font_weight: null,
    };

    return {
      keyword: baseStyle,
      "keyword.control": baseStyle,
      "keyword.operator": baseStyle,
    };
  }

  static mapTypeSyntax(scheme) {
    const typeStyle = {
      color: scheme.primary,
      font_style: "normal",
      font_weight: 700,
    };

    return {
      type: typeStyle,
      "type.builtin": typeStyle,
      class: typeStyle,
      struct: typeStyle,
      enum: typeStyle,
      interface: typeStyle,
    };
  }

  static mapFunctionSyntax(scheme) {
    return {
      function: {
        color: scheme.primary,
        font_style: "italic",
        font_weight: null,
      },
      "function.builtin": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      "function.method": {
        color: scheme.primary,
        font_style: "italic",
        font_weight: null,
      },
      "function.macro": {
        color: scheme.primary,
        font_style: "italic",
        font_weight: null,
      },
    };
  }

  static mapVariableSyntax(scheme) {
    return {
      variable: {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: null,
      },
      "variable.parameter": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
      "variable.builtin": {
        color: scheme.onSurface,
        font_style: "italic",
        font_weight: null,
      },
      "variable.other.member": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
    };
  }

  static mapConstantSyntax(scheme) {
    const constantStyle = {
      color: scheme.tertiary,
      font_style: "normal",
      font_weight: null,
    };

    return {
      constant: constantStyle,
      "constant.builtin": {
        ...constantStyle,
        font_weight: 700,
      },
      "constant.numeric": constantStyle,
      "constant.character": constantStyle,
    };
  }

  static mapStringSyntax(scheme) {
    const stringStyle = {
      color: scheme.tertiary,
      font_style: "normal",
      font_weight: null,
    };

    return {
      string: stringStyle,
      "string.regexp": stringStyle,
      "string.special": stringStyle,
    };
  }

  static mapCommentSyntax(scheme) {
    const commentStyle = {
      color: scheme.outline,
      font_style: "italic",
      font_weight: null,
    };

    return {
      comment: commentStyle,
      "comment.documentation": commentStyle,
    };
  }

  static mapMarkupSyntax(scheme) {
    return {
      attribute: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      property: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      tag: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: null,
      },
      "tag.attribute": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      "markup.heading": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.bold": {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.italic": {
        color: scheme.onSurface,
        font_style: "italic",
        font_weight: null,
      },
      "markup.link": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: null,
      },
      "markup.quote": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      "markup.raw": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
    };
  }

  static mapPunctuationSyntax(scheme) {
    return {
      punctuation: {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: null,
      },
      "punctuation.bracket": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
      "punctuation.delimiter": {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: null,
      },
    };
  }

  static mapSupportSyntax(scheme) {
    const supportStyle = {
      color: scheme.primary,
      font_style: "normal",
      font_weight: 700,
    };

    return {
      support: supportStyle,
      "support.function": supportStyle,
      "support.type": supportStyle,
    };
  }

  static mapSpecialSyntax(scheme) {
    return {
      entity: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: null,
      },
      "entity.name": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: null,
      },
      operator: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      "diff.added": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      "diff.removed": {
        color: scheme.error,
        font_style: "normal",
        font_weight: null,
      },
      "diff.changed": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
      invalid: {
        color: scheme.error,
        font_style: "normal",
        font_weight: null,
      },
      "invalid.illegal": {
        color: scheme.error,
        background_color: `${scheme.error}20`,
        font_style: "normal",
        font_weight: null,
      },
    };
  }
}
