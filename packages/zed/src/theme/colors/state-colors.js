export class StateColors {
  static mapStateColors(scheme, term) {
    return {
      "element.hover": `${scheme.primaryContainer}40`,
      "element.active": `${scheme.secondaryContainer}80`,
      "element.selected": `${scheme.primaryContainer}80`,
      "element.disabled": `${scheme.onSurface}20`,

      "ghost_element.hover": `${scheme.secondary}40`,
      "ghost_element.active": scheme.surfaceContainerHigh,
      "ghost_element.selected": `${scheme.tertiaryContainer}60`,
      "ghost_element.disabled": `${scheme.onSurface}40`,

      "error.background": scheme.errorContainer,
      "error.border": term.normal.red,

      "warning.background": scheme.tertiaryContainer,
      "warning.border": term.normal.yellow,

      "info.background": scheme.primaryContainer,
      "info.border": term.normal.blue,

      "success.background": scheme.secondaryContainer,
      "success.border": term.normal.green,

      error: term.normal.red,
      warning: term.normal.yellow,
      info: term.normal.blue,
      success: term.normal.green,

      hint: term.normal.cyan,
      "hint.background": scheme.tertiaryContainer,
      "hint.border": term.normal.cyan,

      predictive: scheme.primary,
      "predictive.background": scheme.primaryContainer,
      "predictive.border": scheme.primary,
    };
  }
}
