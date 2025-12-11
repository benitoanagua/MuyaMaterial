export default function getCommentSettings(scheme, term) {
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
      foreground: term.normal.green,
      fontStyle: "italic",
    },
  };
}