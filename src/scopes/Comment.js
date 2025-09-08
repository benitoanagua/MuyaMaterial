export default function getCommentSettings(scheme) {
  return {
    name: "Comments",
    scope: [
      "comment",
      "comment.line",
      "comment.block",
      "comment.block.documentation",
      "punctuation.definition.comment",
    ],
    settings: {
      foreground: scheme.outline,
      fontStyle: "italic",
    },
  };
}
