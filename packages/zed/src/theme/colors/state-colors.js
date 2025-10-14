export class StateColors {
  static mapStateColors(scheme, term) {
    return {
      "element.hover": scheme.surfaceContainerHigh,
      "element.active": scheme.surfaceContainerHighest,
      "element.selected": scheme.primaryContainer,
      "element.disabled": scheme.surfaceContainer,

      "ghost_element.hover": scheme.surfaceContainer,
      "ghost_element.active": scheme.surfaceContainerHigh,
      "ghost_element.selected": scheme.secondaryContainer,
      "ghost_element.disabled": scheme.surfaceContainerLow,

      "error.background": scheme.errorContainer,
      "error.border": scheme.error,

      "warning.background": scheme.tertiaryContainer,
      "warning.border": scheme.tertiary,

      "info.background": scheme.primaryContainer,
      "info.border": scheme.primary,

      "success.background": scheme.secondaryContainer,
      "success.border": scheme.secondary,

      error: scheme.error,
      warning: scheme.tertiary,
      info: scheme.primary,
      success: scheme.secondary,

      hint: scheme.tertiary,
      "hint.background": scheme.tertiaryContainer,
      "hint.border": scheme.tertiary,

      predictive: scheme.primary,
      "predictive.background": scheme.primaryContainer,
      "predictive.border": scheme.primary,
    };
  }
}
