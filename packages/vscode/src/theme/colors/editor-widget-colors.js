export default function getEditorWidgetColors(scheme) {
  return {
    "editorWidget.foreground": scheme.onSurface,
    "editorWidget.background": scheme.surfaceContainer,
    "editorWidget.border": scheme.outlineVariant,
    "editorWidget.resizeBorder": scheme.outline,

    "editorSuggestWidget.background": scheme.surfaceContainerLow,
    "editorSuggestWidget.border": scheme.outlineVariant,
    "editorSuggestWidget.foreground": scheme.onSurface,
    "editorSuggestWidget.focusHighlightForeground": scheme.primary,
    "editorSuggestWidget.highlightForeground": scheme.primary,
    "editorSuggestWidget.selectedBackground": scheme.surfaceContainer,
    "editorSuggestWidget.selectedForeground": scheme.onSurface,
    "editorSuggestWidget.selectedIconForeground": scheme.primary,
    "editorSuggestWidgetStatus.foreground": scheme.onSurfaceVariant,

    "editorHoverWidget.foreground": scheme.onSurface,
    "editorHoverWidget.background": scheme.surfaceContainerLow,
    "editorHoverWidget.border": scheme.outlineVariant,
    "editorHoverWidget.highlightForeground": scheme.primary,
    "editorHoverWidget.statusBarBackground": scheme.surfaceContainer,

    "editorGhostText.border": scheme.outlineVariant,
    "editorGhostText.background": scheme.surfaceContainer,
    "editorGhostText.foreground": `${scheme.onSurface}80`,

    "editorStickyScroll.background": scheme.surfaceContainer,
    "editorStickyScroll.border": scheme.outlineVariant,
    "editorStickyScroll.shadow": `${scheme.outline}20`,
    "editorStickyScrollGutter.background": scheme.surfaceContainerHigh,
    "editorStickyScrollHover.background": scheme.surfaceContainerHigh,

    "debugExceptionWidget.background": scheme.surfaceContainerLow,
    "debugExceptionWidget.border": scheme.outlineVariant,

    "editorMarkerNavigation.background": scheme.surfaceContainerLowest,
    "editorMarkerNavigationError.background": scheme.error,
    "editorMarkerNavigationWarning.background": scheme.tertiary,
    "editorMarkerNavigationInfo.background": scheme.primary,
    "editorMarkerNavigationError.headerBackground": `${scheme.error}20`,
    "editorMarkerNavigationWarning.headerBackground": `${scheme.tertiary}20`,
    "editorMarkerNavigationInfo.headerBackground": `${scheme.primary}20`,
  };
}
