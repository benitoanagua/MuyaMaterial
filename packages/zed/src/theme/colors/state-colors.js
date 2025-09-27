export class StateColors {
  static mapStateColors(scheme) {
    return {
      "element.hover": `${scheme.primary}15`,
      "element.active": `${scheme.primaryContainer}80`,
      "element.selected": `${scheme.secondaryContainer}80`,
      "element.disabled": `${scheme.onSurface}08`,

      "ghost_element.hover": `${scheme.secondary}12`,
      "ghost_element.active": scheme.surfaceContainerHigh,
      "ghost_element.selected": `${scheme.tertiaryContainer}60`,
      "ghost_element.disabled": `${scheme.onSurface}08`,

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

      hint: scheme.tertiary,
      "hint.background": scheme.tertiaryContainer,
      "hint.border": scheme.tertiary,

      predictive: scheme.primary,
      "predictive.background": scheme.primaryContainer,
      "predictive.border": scheme.primary,
    };
  }
}
