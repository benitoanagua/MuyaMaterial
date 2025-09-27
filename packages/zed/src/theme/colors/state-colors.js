export class StateColors {
  static mapStateColors(scheme) {
    return {
      "element.hover": `${scheme.primary}14`,
      "element.active": scheme.primaryContainer,
      "element.selected": scheme.secondaryContainer,
      "element.disabled": `${scheme.onSurface}14`,

      "ghost_element.hover": `${scheme.secondary}14`,
      "ghost_element.active": scheme.surfaceContainerHigh,
      "ghost_element.selected": scheme.surfaceContainer,
      "ghost_element.disabled": `${scheme.onSurface}14`,

      "error.background": scheme.errorContainer,
      "error.border": scheme.error,

      "warning.background": scheme.secondaryContainer,
      "warning.border": scheme.secondary,

      "info.background": scheme.primaryContainer,
      "info.border": scheme.primary,

      "success.background": scheme.tertiaryContainer,
      "success.border": scheme.tertiary,

      error: scheme.error,
      warning: scheme.secondary,
      info: scheme.primary,
      success: scheme.tertiary,
      hint: scheme.secondary,
      "hint.background": scheme.secondaryContainer,
      "hint.border": scheme.secondary,

      predictive: scheme.tertiary,
      "predictive.background": scheme.tertiaryContainer,
      "predictive.border": scheme.tertiary,
    };
  }
}
