export default function getGeneralColors(scheme) {
  return {
    // Contrast colors
    // contrastActiveBorder: scheme.primary,
    // contrastBorder: scheme.outline,

    // Base colors
    focusBorder: scheme.primary,
    foreground: scheme.onBackground,
    disabledForeground: `${scheme.onBackground}60`,
    "widget.border": scheme.outline,
    "widget.shadow": `${scheme.outline}20`,
    "selection.background": `${scheme.primary}40`,
    descriptionForeground: scheme.onSurfaceVariant,
    errorForeground: scheme.error,
    "icon.foreground": scheme.onSurface,
    "sash.hoverBorder": scheme.primary,

    // Window border
    "window.activeBorder": scheme.primary,
    "window.inactiveBorder": scheme.outlineVariant,

    // Text colors
    "textBlockQuote.background": scheme.surfaceContainer,
    "textBlockQuote.border": scheme.outlineVariant,
    "textCodeBlock.background": scheme.surfaceContainerLow,
    "textLink.activeForeground": scheme.primary,
    "textLink.foreground": scheme.primary,
    "textPreformat.foreground": scheme.onSurfaceVariant,
    "textPreformat.background": scheme.surfaceContainer,
    "textSeparator.foreground": scheme.outlineVariant,

    // Action colors
    "toolbar.hoverBackground": scheme.surfaceContainerHigh,
    "toolbar.hoverOutline": scheme.primary,
    "toolbar.activeBackground": scheme.surfaceContainerHighest,

    // Badge
    "badge.foreground": scheme.onPrimary,
    "badge.background": scheme.primary,

    // Progress bar
    "progressBar.background": scheme.primary,
  };
}
