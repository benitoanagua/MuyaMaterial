export default function getCommunicationElements(scheme) {
  return {
    // Chat colors
    "chat.requestBorder": scheme.outlineVariant,
    "chat.requestBackground": scheme.primaryContainer,
    "chat.slashCommandBackground": scheme.primary,
    "chat.slashCommandForeground": scheme.onPrimary,
    "chat.avatarBackground": scheme.surfaceContainerHigh,
    "chat.avatarForeground": scheme.onSurfaceVariant,
    "chat.editedFileForeground": scheme.primary,
    "chat.linesAddedForeground": scheme.secondary,
    "chat.linesRemovedForeground": scheme.error,
    "chat.requestCodeBorder": scheme.outline,
    "chat.requestBubbleBackground": scheme.surfaceContainer,
    "chat.requestBubbleHoverBackground": scheme.surfaceContainerHigh,
    "chat.checkpointSeparator": scheme.outlineVariant,

    // Inline Chat colors
    "inlineChat.background": scheme.surfaceContainerLowest,
    "inlineChat.foreground": scheme.onSurface,
    "inlineChat.border": scheme.outlineVariant,
    "inlineChat.shadow": `${scheme.outline}20`,
    "inlineChatInput.border": scheme.outlineVariant,
    "inlineChatInput.focusBorder": scheme.primary,
    "inlineChatInput.placeholderForeground": `${scheme.onSurfaceVariant}80`,
    "inlineChatInput.background": scheme.surfaceContainer,
    "inlineChatDiff.inserted": `${scheme.secondary}20`,
    "inlineChatDiff.removed": `${scheme.error}20`,

    // Panel Chat colors
    "interactive.activeCodeBorder": scheme.primary,
    "interactive.inactiveCodeBorder": scheme.outlineVariant,
  };
}
