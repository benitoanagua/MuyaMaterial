export default function getSettingsAndBreadcrumbs(scheme) {
  return {
    // Settings Editor colors
    "settings.headerForeground": scheme.onSurfaceVariant,
    // "settings.modifiedItemIndicator": scheme.primary,
    // "settings.dropdownBackground": scheme.surfaceContainerLowest,
    // "settings.dropdownForeground": scheme.onSurface,
    // "settings.dropdownBorder": scheme.outlineVariant,
    // "settings.dropdownListBorder": scheme.outlineVariant,
    // "settings.checkboxBackground": scheme.surfaceContainerLowest,
    // "settings.checkboxForeground": scheme.onSurface,
    // "settings.checkboxBorder": scheme.outlineVariant,
    // "settings.rowHoverBackground": scheme.surfaceContainer,
    // "settings.textInputBackground": scheme.surfaceContainerLowest,
    // "settings.textInputForeground": scheme.onSurface,
    // "settings.textInputBorder": scheme.outlineVariant,
    // "settings.numberInputBackground": scheme.surfaceContainerLowest,
    // "settings.numberInputForeground": scheme.onSurface,
    // "settings.numberInputBorder": scheme.outlineVariant,
    "settings.focusedRowBackground": scheme.surfaceContainer,
    // "settings.focusedRowBorder": scheme.primary,
    "settings.headerBorder": scheme.outlineVariant,
    "settings.sashBorder": scheme.outlineVariant,
    // "settings.settingsHeaderHoverForeground": scheme.primary,

    // Breadcrumbs colors
    "breadcrumb.foreground": scheme.onSurfaceVariant,
    "breadcrumb.background": scheme.surfaceContainer,
    "breadcrumb.focusForeground": scheme.primary,
    "breadcrumb.activeSelectionForeground": scheme.onPrimary,
    "breadcrumbPicker.background": scheme.surfaceContainer,
  };
}
