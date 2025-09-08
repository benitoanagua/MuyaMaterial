export default function getCommentSettings(scheme) {
  return {
    name: "Comments",
    scope: [
      "comment",
      "comment.line",
      "comment.block",
      "comment.block.documentation",
      "punctuation.definition.comment",
      "meta.toc-list",
    ],
    settings: {
      foreground: scheme.outline,
      fontStyle: "italic",
    },
  };
}
