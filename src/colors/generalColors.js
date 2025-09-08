export default function getGeneralColors(scheme) {
  return {
    // Base colors
    focusBorder: scheme.primary,
    foreground: scheme.onBackground,
    disabledForeground: `${scheme.onBackground}80`,
    "widget.border": scheme.outline,
    "selection.background": `${scheme.primary}40`,
    descriptionForeground: scheme.onSurfaceVariant,
    errorForeground: scheme.error,
    "icon.foreground": scheme.onSurface,
    "sash.hoverBorder": scheme.primary,

    // Window border
    "window.activeBorder": scheme.primary,
    "window.inactiveBorder": scheme.outlineVariant,

    // Text colors
    "textLink.activeForeground": scheme.primary,
    "textLink.foreground": scheme.primary,

    // Badge
    "badge.foreground": scheme.onPrimary,
    "badge.background": scheme.primary,

    // Progress bar
    "progressBar.background": scheme.primary,
  };
}
