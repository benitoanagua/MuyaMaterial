export default function getAdditionalElements(scheme) {
  return {
    // Notebook colors
    "notebook.editorBackground": scheme.surfaceContainerLowest,
    "notebook.cellBorderColor": scheme.outlineVariant,
    "notebook.cellHoverBackground": scheme.surfaceContainer,
    "notebook.cellInsertionIndicator": scheme.primary,
    "notebook.cellStatusBarItemHoverBackground": scheme.surfaceContainerHigh,
    "notebook.cellToolbarSeparator": scheme.outlineVariant,
    "notebook.cellEditorBackground": scheme.surfaceContainerLowest,
    "notebook.focusedCellBackground": scheme.surfaceContainer,
    "notebook.focusedCellBorder": scheme.primary,
    "notebook.focusedEditorBorder": scheme.outline,
    "notebook.inactiveFocusedCellBorder": scheme.outlineVariant,
    "notebook.inactiveSelectedCellBorder": scheme.outlineVariant,
    "notebook.outputContainerBackgroundColor": scheme.surfaceContainerLowest,
    "notebook.outputContainerBorderColor": scheme.outlineVariant,
    "notebook.selectedCellBackground": scheme.surfaceContainerHigh,
    "notebook.selectedCellBorder": scheme.outline,
    "notebook.symbolHighlightBackground": `${scheme.secondary}20`,
    "notebookScrollbarSlider.activeBackground": `${scheme.outline}40`,
    "notebookScrollbarSlider.background": `${scheme.outline}20`,
    "notebookScrollbarSlider.hoverBackground": `${scheme.outline}60`,
    // "notebookStatusErrorIcon.foreground": scheme.error,
    // "notebookStatusRunningIcon.foreground": scheme.primary,
    // "notebookStatusSuccessIcon.foreground": scheme.tertiary,
    // "notebookEditorOverviewRuler.runningCellForeground": scheme.primary,

    // Chart colors
    // "charts.foreground": scheme.onSurface,
    // "charts.lines": scheme.outlineVariant,
    // "charts.red": scheme.error,
    // "charts.blue": scheme.primary,
    // "charts.yellow": scheme.tertiary,
    // "charts.green": scheme.secondary,
    // "charts.cyan": scheme.tertiary,
    // "chart.line": scheme.outlineVariant,
    // "chart.axis": scheme.outline,
    // "chart.guide": scheme.outlineVariant,

    // Ports colors
    // "ports.iconRunningProcessForeground": scheme.primary,

    // Comments View colors
    // "commentsView.resolvedIcon": scheme.tertiary,
    // "commentsView.unresolvedIcon": scheme.primary,

    // Action Bar colors
    // "actionBar.toggledBackground": scheme.primary,

    // Simple Find Widget colors
    // "simpleFindWidget.sashBorder": scheme.outlineVariant,
  };
}
