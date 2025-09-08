export default function getEditorColors(scheme) {
  return {
    "editor.background": scheme.background,
    "editor.foreground": scheme.onBackground,
    "editorLineNumber.foreground": scheme.outline,
    "editorLineNumber.activeForeground": scheme.primary,
    "editorCursor.foreground": scheme.primary,

    "editor.selectionBackground": `${scheme.primaryContainer}40`,
    "editor.inactiveSelectionBackground": `${scheme.secondaryContainer}40`,
    "editor.selectionHighlightBackground": `${scheme.primaryContainer}20`,

    "editor.wordHighlightBackground": `${scheme.secondaryContainer}30`,
    "editor.wordHighlightStrongBackground": `${scheme.secondaryContainer}50`,

    "editor.findMatchBackground": `${scheme.tertiary}60`,
    "editor.findMatchHighlightBackground": `${scheme.tertiary}30`,

    "editor.lineHighlightBackground": `${scheme.surfaceVariant}20`,
    "editor.lineHighlightBorder": scheme.outlineVariant,

    "editorWhitespace.foreground": `${scheme.outline}40`,

    "editorIndentGuide.background": `${scheme.outline}20`,
    "editorIndentGuide.activeBackground": `${scheme.outline}60`,

    "editorRuler.foreground": `${scheme.outline}30`,

    "editorBracketMatch.background": `${scheme.primary}30`,
    "editorBracketMatch.border": scheme.primary,

    "editorOverviewRuler.border": `${scheme.outline}20`,
  };
}
