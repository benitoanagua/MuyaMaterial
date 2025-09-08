export default function getEditorGroupsAndTabsColors(scheme) {
  return {
    "editorGroup.border": scheme.surfaceVariant,
    "editorGroupHeader.tabsBackground": scheme.surface,
    "editorGroupHeader.tabsBorder": scheme.outline,

    "tab.activeBackground": scheme.surface,
    "tab.activeForeground": scheme.onSurface,
    "tab.inactiveBackground": scheme.surfaceContainer,
    "tab.inactiveForeground": `${scheme.onSurface}70`,
    "tab.border": `${scheme.outline}20`,
    "tab.activeBorder": scheme.primary,
  };
}
