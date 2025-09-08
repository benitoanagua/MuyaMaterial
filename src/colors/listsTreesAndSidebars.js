export default function getListsTreesAndSidebars(scheme) {
  return {
    // Lists and trees
    "list.activeSelectionBackground": scheme.primaryContainer,
    "list.activeSelectionForeground": scheme.onPrimaryContainer,
    "list.focusBackground": `${scheme.primaryContainer}40`,
    "list.hoverBackground": `${scheme.surfaceContainerHigh}80`,

    // Activity Bar
    "activityBar.background": scheme.surface,
    "activityBar.foreground": scheme.onSurface,
    "activityBar.inactiveForeground": `${scheme.onSurface}60`,
    "activityBarBadge.background": scheme.primary,
    "activityBarBadge.foreground": scheme.onPrimary,

    // Side Bar
    "sideBar.background": scheme.surfaceContainer,
    "sideBar.foreground": scheme.onSurface,
    "sideBarSectionHeader.background": scheme.surfaceContainerHigh,
    "sideBarSectionHeader.foreground": scheme.onSurface,
  };
}
