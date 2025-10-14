export default function getMenusAndCommandCenter(scheme, term) {
  return {
    "titleBar.activeBackground": scheme.surfaceContainerHighest,
    "titleBar.activeForeground": scheme.onSurface,
    "titleBar.inactiveBackground": scheme.surfaceContainerLow,
    "titleBar.inactiveForeground": scheme.onSurfaceVariant,
    "titleBar.border": scheme.outlineVariant,

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

    "commandCenter.foreground": scheme.onSurface,
    "commandCenter.activeForeground": scheme.onPrimary,
    "commandCenter.background": scheme.surfaceContainer,
    "commandCenter.activeBackground": scheme.primary,
    "commandCenter.border": scheme.outlineVariant,
    "commandCenter.inactiveForeground": scheme.onSurfaceVariant,
    "commandCenter.inactiveBorder": scheme.outlineVariant,
    "commandCenter.activeBorder": scheme.primary,
    "commandCenter.debuggingBackground": scheme.errorContainer,
  };
}
