export class StateColors {
  static mapStateColors(scheme, term) {
    return {
      "element.hover": scheme.surfaceContainerHigh,
      "element.active": `${scheme.onSurfaceVariant}4D`,
      "element.selected": `${scheme.outlineVariant}4D`,
      "element.disabled": scheme.onSurfaceVariant,

      "ghost_element.hover": `${scheme.surfaceContainerHigh}4D`,
      "ghost_element.active": `${scheme.onSurfaceVariant}99`,
      "ghost_element.selected": `${scheme.onSurfaceVariant}66`,
      "ghost_element.disabled": scheme.onSurfaceVariant,

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
