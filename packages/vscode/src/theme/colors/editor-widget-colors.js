export default function getEditorWidgetColors(scheme, term) {
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
    "editorGhostText.foreground": scheme.onSurfaceVariant,

    "editorStickyScroll.background": scheme.surfaceContainer,
    "editorStickyScroll.border": scheme.outlineVariant,
    "editorStickyScroll.shadow": `${scheme.shadow}20`,
    "editorStickyScrollGutter.background": scheme.surfaceContainerHigh,
    "editorStickyScrollHover.background": scheme.surfaceContainerHigh,

    "debugExceptionWidget.background": scheme.surfaceContainerLow,
    "debugExceptionWidget.border": scheme.outlineVariant,

    "editorMarkerNavigation.background": scheme.surfaceContainerLowest,
    "editorMarkerNavigationError.background": scheme.error,
    "editorMarkerNavigationWarning.background": scheme.tertiary,
    "editorMarkerNavigationInfo.background": scheme.primary,
    "editorMarkerNavigationError.headerBackground": `${scheme.errorContainer}33`,
    "editorMarkerNavigationWarning.headerBackground": `${scheme.tertiaryContainer}33`,
    "editorMarkerNavigationInfo.headerBackground": `${scheme.primaryContainer}33`,
  };
}
