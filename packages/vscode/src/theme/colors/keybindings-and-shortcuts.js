export default function getKeybindingsAndShortcuts(scheme) {
  return {
    "keybindingLabel.background": scheme.surfaceContainerLowest,
    "keybindingLabel.foreground": scheme.onSurface,
    "keybindingLabel.border": scheme.outlineVariant,
    "keybindingLabel.bottomBorder": scheme.surfaceVariant,

    "keybindingTable.headerBackground": scheme.surfaceContainerLow,
    "keybindingTable.rowsBackground": scheme.surfaceContainerLowest,
  };
}
