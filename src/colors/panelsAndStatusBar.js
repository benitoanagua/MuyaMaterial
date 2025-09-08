export default function getPanelsAndStatusBar(scheme) {
  return {
    // Panel colors
    "panel.background": scheme.surfaceContainer,
    "panel.border": scheme.outline,
    "panelTitle.activeForeground": scheme.onSurface,
    "panelTitle.inactiveForeground": `${scheme.onSurface}70`,

    // Status Bar colors
    "statusBar.background": scheme.surfaceContainerHigh,
    "statusBar.foreground": scheme.onSurface,
    "statusBar.debuggingBackground": scheme.error,
    "statusBar.debuggingForeground": scheme.onError,
  };
}
