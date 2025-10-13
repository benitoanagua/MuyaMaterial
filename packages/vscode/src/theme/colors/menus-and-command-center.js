export default function getMenusAndCommandCenter(scheme) {
  return {
    // Title Bar colors
    "titleBar.activeBackground": scheme.surfaceContainerHighest,
    "titleBar.activeForeground": scheme.onSurface,
    "titleBar.inactiveBackground": scheme.surfaceContainerLow,
    "titleBar.inactiveForeground": `${scheme.onSurface}CC`,
    "titleBar.border": scheme.outlineVariant,

    // Menu Bar colors
    "menubar.selectionForeground": scheme.onPrimary,
    "menubar.selectionBackground": scheme.primary,
    "menubar.selectionBorder": scheme.outlineVariant,
    "menu.foreground": scheme.onSurface,
    "menu.background": scheme.surfaceContainerHigh,
    "menu.selectionForeground": scheme.onPrimary,
    "menu.selectionBackground": scheme.primary,
    "menu.selectionBorder": scheme.outline,
    "menu.separatorBackground": scheme.outlineVariant,
    "menu.border": scheme.outlineVariant,

    // Command Center colors
    "commandCenter.foreground": scheme.onSurface,
    "commandCenter.activeForeground": scheme.onPrimary,
    "commandCenter.background": scheme.surfaceContainer,
    "commandCenter.activeBackground": scheme.primary,
    "commandCenter.border": scheme.outlineVariant,
    "commandCenter.inactiveForeground": `${scheme.onSurface}99`,
    "commandCenter.inactiveBorder": scheme.outlineVariant,
    "commandCenter.activeBorder": scheme.primary,
    "commandCenter.debuggingBackground": scheme.error,
  };
}
