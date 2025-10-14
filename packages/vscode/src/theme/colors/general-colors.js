export default function getGeneralColors(scheme) {
  return {
    // Contrast colors
    // contrastActiveBorder: scheme.primary,
    // contrastBorder: scheme.outline,

    focusBorder: scheme.primary,
    foreground: scheme.onBackground,
    disabledForeground: scheme.onSurfaceVariant,
    "widget.border": scheme.outline,
    "widget.shadow": `${scheme.shadow}33`,
    "selection.background": `${scheme.primaryContainer}66`,
    descriptionForeground: scheme.onSurfaceVariant,
    errorForeground: scheme.error,
    "icon.foreground": scheme.onSurface,
    "sash.hoverBorder": scheme.primary,

    "window.activeBorder": scheme.primary,
    "window.inactiveBorder": scheme.outlineVariant,

    "textBlockQuote.background": scheme.surfaceContainer,
    "textBlockQuote.border": scheme.outlineVariant,
    "textCodeBlock.background": scheme.surfaceContainerLow,
    "textLink.activeForeground": scheme.primary,
    "textLink.foreground": scheme.primary,
    "textPreformat.foreground": scheme.onSurfaceVariant,
    "textPreformat.background": scheme.surfaceContainer,
    "textSeparator.foreground": scheme.outlineVariant,

    "toolbar.hoverBackground": scheme.surfaceContainerHigh,
    "toolbar.hoverOutline": scheme.primary,
    "toolbar.activeBackground": scheme.surfaceContainerHighest,

    "badge.foreground": scheme.onPrimary,
    "badge.background": scheme.primary,

    "progressBar.background": scheme.primary,
  };
}
