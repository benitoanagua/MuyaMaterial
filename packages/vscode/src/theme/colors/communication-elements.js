export default function getCommunicationElements(scheme, term) {
  return {
    // Chat colors
    "chat.requestBorder": scheme.outlineVariant,
    "chat.requestBackground": scheme.primaryContainer,
    "chat.slashCommandBackground": scheme.primary,
    "chat.slashCommandForeground": scheme.onPrimary,
    "chat.avatarBackground": scheme.surfaceContainerHigh,
    "chat.avatarForeground": scheme.onSurfaceVariant,
    "chat.editedFileForeground": scheme.primary,
    "chat.linesAddedForeground": `${term.normal.green}80`,
    "chat.linesRemovedForeground": `${term.normal.red}80`,
    "chat.requestCodeBorder": `${scheme.outlineVariant}80`,
    "chat.requestBubbleBackground": `${scheme.surfaceContainer}80`,
    "chat.requestBubbleHoverBackground": `${scheme.surfaceContainerHigh}80`,
    "chat.checkpointSeparator": scheme.outlineVariant,

    // Inline Chat colors
    "inlineChat.background": scheme.surfaceContainerLowest,
    "inlineChat.foreground": scheme.onSurface,
    "inlineChat.border": scheme.outlineVariant,
    "inlineChat.shadow": `${scheme.outline}33`,
    "inlineChatInput.border": scheme.outlineVariant,
    "inlineChatInput.focusBorder": scheme.primary,
    "inlineChatInput.placeholderForeground": `${scheme.onSurfaceVariant}CC`,
    "inlineChatInput.background": scheme.surfaceContainer,
    "inlineChatDiff.inserted": `${scheme.secondaryContainer}33`,
    "inlineChatDiff.removed": `${scheme.errorContainer}33`,

    // Panel Chat colors
    "interactive.activeCodeBorder": scheme.primary,
    "interactive.inactiveCodeBorder": scheme.outlineVariant,
  };
}
