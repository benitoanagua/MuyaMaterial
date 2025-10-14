export default function getControlElements(scheme, term) {
  return {
    // Button control
    "button.background": scheme.primary,
    "button.foreground": scheme.onPrimary,
    "button.border": scheme.outlineVariant,
    "button.separator": scheme.outlineVariant,
    "button.hoverBackground": scheme.primaryContainer,
    "button.secondaryForeground": scheme.onSecondaryContainer,
    "button.secondaryBackground": scheme.secondaryContainer,
    "button.secondaryHoverBackground": `${scheme.secondaryContainer}1A`,

    // Checkbox control
    "checkbox.background": scheme.surfaceContainerLowest,
    "checkbox.border": scheme.outlineVariant,
    "checkbox.foreground": scheme.onSurface,
    "checkbox.selectBackground": scheme.primary,
    "checkbox.selectBorder": scheme.primary,
    "checkbox.disabled.background": `${scheme.surfaceContainer}99`,
    "checkbox.disabled.foreground": `${scheme.onSurface}66`,

    // Radio control
    "radio.activeForeground": scheme.onPrimary,
    "radio.activeBackground": scheme.primary,
    "radio.activeBorder": scheme.primary,
    "radio.inactiveForeground": scheme.onSurfaceVariant,
    "radio.inactiveBackground": scheme.surfaceContainerLowest,
    "radio.inactiveBorder": scheme.outlineVariant,
    "radio.inactiveHoverBackground": scheme.surfaceContainer,

    // Dropdown control
    "dropdown.background": scheme.surfaceContainerLowest,
    "dropdown.listBackground": scheme.surfaceContainer,
    "dropdown.border": scheme.outlineVariant,
    "dropdown.foreground": scheme.onSurface,

    // Input control
    "input.background": scheme.surfaceContainerLowest,
    "input.border": scheme.outlineVariant,
    "input.foreground": scheme.onSurface,
    "input.placeholderForeground": `${scheme.onSurfaceVariant}90`,
    "inputOption.activeBackground": `${scheme.primaryContainer}33`,
    "inputOption.activeBorder": scheme.primary,
    "inputOption.activeForeground": scheme.primary,
    "inputOption.hoverBackground": scheme.surfaceContainer,
    "inputValidation.errorBackground": `${scheme.errorContainer}26`,
    "inputValidation.errorForeground": term.normal.red,
    "inputValidation.errorBorder": term.normal.red,
    "inputValidation.infoBackground": `${scheme.primaryContainer}26`,
    "inputValidation.infoForeground": term.normal.blue,
    "inputValidation.infoBorder": term.normal.blue,
    "inputValidation.warningBackground": `${term.normal.yellow}26`,
    "inputValidation.warningForeground": term.bright.yellow,
    "inputValidation.warningBorder": term.dim.yellow,

    // Scrollbar control
    "scrollbar.shadow": `${scheme.outline}66`,
    "scrollbarSlider.activeBackground": `${scheme.primary}99`,
    "scrollbarSlider.background": `${scheme.outline}66`,
    "scrollbarSlider.hoverBackground": `${scheme.primary}80`,
  };
}
