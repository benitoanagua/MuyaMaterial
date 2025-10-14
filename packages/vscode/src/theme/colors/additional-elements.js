export default function getAdditionalElements(scheme, term) {
  return {
    // Notebook colors
    "notebook.editorBackground": scheme.surfaceContainerLow,
    "notebook.cellBorderColor": scheme.outlineVariant,
    "notebook.cellHoverBackground": scheme.primaryContainer,
    "notebook.cellInsertionIndicator": scheme.primary,
    "notebook.cellStatusBarItemHoverBackground": scheme.surfaceContainerHigh,
    "notebook.cellToolbarSeparator": scheme.outlineVariant,
    "notebook.cellEditorBackground": scheme.surfaceContainerLow,
    "notebook.focusedCellBackground": scheme.surfaceContainer,
    "notebook.focusedCellBorder": scheme.primary,
    "notebook.focusedEditorBorder": scheme.outline,
    "notebook.inactiveFocusedCellBorder": scheme.outlineVariant,
    "notebook.inactiveSelectedCellBorder": scheme.outlineVariant,
    "notebook.outputContainerBackgroundColor": scheme.surfaceContainerLow,
    "notebook.outputContainerBorderColor": scheme.outlineVariant,
    "notebook.selectedCellBackground": scheme.surfaceContainerHigh,
    "notebook.selectedCellBorder": scheme.outline,
    "notebook.symbolHighlightBackground": `${scheme.secondary}1A`,
    "notebookScrollbarSlider.activeBackground": `${scheme.primary}66`,
    "notebookScrollbarSlider.background": `${scheme.outline}40`,
    "notebookScrollbarSlider.hoverBackground": `${scheme.primary}80`,
    "notebookStatusErrorIcon.foreground": term.normal.red,
    "notebookStatusRunningIcon.foreground": term.normal.blue,
    "notebookStatusSuccessIcon.foreground": term.normal.green,
    "notebookEditorOverviewRuler.runningCellForeground": term.normal.blue,

    // Chart colors
    "charts.foreground": scheme.onSurface,
    "charts.lines": scheme.outlineVariant,
    "charts.red": term.normal.red,
    "charts.blue": term.normal.blue,
    "charts.yellow": term.normal.yellow,
    "charts.green": term.normal.green,
    "charts.orange": term.bright.yellow,
    "charts.purple": term.normal.magenta,
    "chart.line": scheme.outlineVariant,
    "chart.axis": scheme.outline,
    "chart.guide": scheme.outlineVariant,

    // Ports colors
    "ports.iconRunningProcessForeground": term.normal.blue,

    // Comments View colors
    "commentsView.resolvedIcon": term.normal.green,
    "commentsView.unresolvedIcon": term.normal.blue,

    // Action Bar colors
    "actionBar.toggledBackground": scheme.primary,

    // Simple Find Widget colors
    "simpleFindWidget.sashBorder": scheme.outlineVariant,

    // Gauge colors
    "gauge.background": scheme.surfaceContainer,
    "gauge.foreground": scheme.onSurface,
    "gauge.border": scheme.outline,
    "gauge.warningBackground": term.normal.yellow,
    "gauge.warningForeground": term.dim.yellow,
    "gauge.errorBackground": term.normal.red,
    "gauge.errorForeground": term.dim.red,
  };
}
