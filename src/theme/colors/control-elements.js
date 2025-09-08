export default function getControlElements(scheme) {
  return {
    // Button control
    "button.background": scheme.primary,
    "button.foreground": scheme.onPrimary,
    "button.border": scheme.outlineVariant,
    "button.separator": scheme.outlineVariant,
    "button.hoverBackground": `${scheme.primary}10`,
    "button.secondaryForeground": scheme.onSecondary,
    "button.secondaryBackground": scheme.secondary,
    "button.secondaryHoverBackground": `${scheme.secondary}10`,

    // Checkbox control
    "checkbox.background": scheme.surfaceContainerLowest,
    "checkbox.border": scheme.outlineVariant,
    "checkbox.foreground": scheme.onSurface,
    // "checkbox.selectBackground": scheme.primary,
    // "checkbox.selectBorder": scheme.primary,

    // Radio control
    // "radio.activeForeground": scheme.onPrimary,
    // "radio.activeBackground": scheme.primary,
    // "radio.activeBorder": scheme.primary,
    // "radio.inactiveForeground": scheme.onSurfaceVariant,
    // "radio.inactiveBackground": scheme.surfaceContainerLowest,
    // "radio.inactiveBorder": scheme.outlineVariant,
    // "radio.inactiveHoverBackground": scheme.surfaceContainer,

    // Dropdown control
    "dropdown.background": scheme.surfaceContainerLowest,
    // "dropdown.listBackground": scheme.surfaceContainer,
    "dropdown.border": scheme.outlineVariant,
    "dropdown.foreground": scheme.onSurface,

    // Input control
    "input.background": scheme.surfaceContainerLowest,
    "input.border": scheme.outlineVariant,
    "input.foreground": scheme.onSurface,
    "input.placeholderForeground": `${scheme.onSurfaceVariant}80`,
    "inputOption.activeBackground": `${scheme.primary}20`,
    "inputOption.activeBorder": scheme.primary,
    "inputOption.activeForeground": scheme.primary,
    "inputOption.hoverBackground": scheme.surfaceContainer,
    // "inputValidation.errorBackground": `${scheme.error}20`,
    // "inputValidation.errorForeground": scheme.error,
    // "inputValidation.errorBorder": scheme.error,
    // "inputValidation.infoBackground": `${scheme.primary}20`,
    // "inputValidation.infoForeground": scheme.primary,
    // "inputValidation.infoBorder": scheme.primary,
    // "inputValidation.warningBackground": `${scheme.tertiary}20`,
    // "inputValidation.warningForeground": scheme.tertiary,
    // "inputValidation.warningBorder": scheme.tertiary,

    // Scrollbar control
    // "scrollbar.shadow": `${scheme.outline}40`,
    "scrollbarSlider.activeBackground": `${scheme.primary}60`,
    "scrollbarSlider.background": `${scheme.outline}40`,
    "scrollbarSlider.hoverBackground": `${scheme.outline}60`,
  };
}
