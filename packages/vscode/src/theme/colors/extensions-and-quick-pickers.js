export default function getExtensionsAndQuickPickers(scheme) {
  return {
    // Extensions colors
    "extensionButton.prominentForeground": scheme.onPrimary,
    "extensionButton.prominentBackground": scheme.primary,
    "extensionButton.prominentHoverBackground": scheme.primaryContainer,
    "extensionButton.background": scheme.surfaceContainer,
    "extensionButton.foreground": scheme.onSurface,
    "extensionButton.hoverBackground": scheme.surfaceContainerHigh,
    "extensionButton.separator": scheme.outlineVariant,
    "extensionBadge.remoteBackground": scheme.secondaryContainer,
    "extensionBadge.remoteForeground": scheme.onSecondaryContainer,
    "extensionIcon.starForeground": scheme.tertiary,
    "extensionIcon.verifiedForeground": scheme.primary,
    "extensionIcon.preReleaseForeground": scheme.primary,
    "extensionIcon.sponsorForeground": scheme.onPrimary,
    "extensionIcon.privateForeground": scheme.secondary,
    "mcpIcon.starForeground": scheme.tertiary,

    // Quick picker colors
    "pickerGroup.border": scheme.outlineVariant,
    "pickerGroup.foreground": scheme.primary,
    "quickInput.background": scheme.surfaceContainerLow,
    "quickInput.foreground": scheme.onSurface,
    "quickInputList.focusBackground": scheme.surfaceContainer,
    "quickInputList.focusForeground": scheme.onSurface,
    "quickInputList.focusIconForeground": scheme.onSurfaceVariant,
    "quickInputTitle.background": scheme.surfaceContainer,
  };
}
