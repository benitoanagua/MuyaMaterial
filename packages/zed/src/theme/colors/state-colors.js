export class StateColors {
  static mapStateColors(scheme, term) {
    return {
      "element.hover": scheme.surfaceContainerHigh,
      "element.active": scheme.surfaceContainerHighest,
      "element.selected": scheme.primaryContainer,
      "element.disabled": scheme.surfaceContainer,

      "ghost_element.background": scheme.surface,
      "ghost_element.hover": scheme.surfaceContainerHigh,
      "ghost_element.active": scheme.surfaceContainerHighest,
      "ghost_element.selected": scheme.secondaryContainer,
      "ghost_element.disabled": scheme.surfaceContainer,

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

      hint: scheme.onSurfaceVariant,
      "hint.background": scheme.surfaceContainer,
      "hint.border": scheme.outlineVariant,

      predictive: scheme.onSurfaceVariant,
      "predictive.background": scheme.surfaceContainer,
      "predictive.border": scheme.primary,
    };
  }
}
