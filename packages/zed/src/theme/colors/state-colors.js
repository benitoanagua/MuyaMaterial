export class StateColors {
  static mapStateColors(scheme, term) {
    return {
      // Element States
      "element.hover": scheme.surfaceContainer,
      "element.active": scheme.surfaceContainerHigh,
      "element.selected": scheme.secondaryContainer,
      "element.disabled": `${scheme.onSurface}1F`,

      "ghost_element.hover": scheme.surfaceContainerLow,
      "ghost_element.active": scheme.surfaceContainer,
      "ghost_element.selected": scheme.secondaryContainer,
      "ghost_element.disabled": `${scheme.onSurface}1F`,

      // Feedback States (Material Design 3 Semantic)
      error: scheme.error,
      "error.background": scheme.errorContainer,
      "error.border": scheme.error,

      warning: term.normal.yellow, // M3 doesn't have a standard 'warning', using yellow
      "warning.background": `${term.normal.yellow}33`,
      "warning.border": term.normal.yellow,

      info: scheme.primary,
      "info.background": scheme.primaryContainer,
      "info.border": scheme.primary,

      success: term.normal.green,
      "success.background": `${term.normal.green}33`,
      "success.border": term.normal.green,

      hint: scheme.onSecondaryContainer,
      "hint.background": scheme.secondaryContainer,
      "hint.border": scheme.secondary,

      predictive: scheme.secondary,
      "predictive.background": `${scheme.secondaryContainer}4D`,
      "predictive.border": scheme.outlineVariant,
    };
  }
}
