export class SpecialColors {
  static mapSpecialColors(scheme, term) {
    return {
      created: scheme.secondary,
      "created.background": scheme.secondaryContainer,
      "created.border": scheme.secondary,

      modified: scheme.primary,
      "modified.background": scheme.primaryContainer,
      "modified.border": scheme.primary,

      deleted: scheme.error,
      "deleted.background": scheme.errorContainer,
      "deleted.border": scheme.error,

      conflict: scheme.tertiary,
      "conflict.background": scheme.tertiaryContainer,
      "conflict.border": scheme.tertiary,

      renamed: scheme.secondary,
      "renamed.background": scheme.secondaryContainer,
      "renamed.border": scheme.secondary,

      ignored: scheme.onSurfaceVariant,
      "ignored.background": scheme.surfaceContainer,
      "ignored.border": scheme.outlineVariant,

      hidden: scheme.onSurfaceVariant,
      "hidden.background": scheme.surfaceContainer,
      "hidden.border": scheme.outlineVariant,

      unreachable: scheme.error,
      "unreachable.background": scheme.errorContainer,
      "unreachable.border": scheme.error,

      players: [
        {
          cursor: scheme.primary,
          selection: `${scheme.primaryContainer}66`,
          background: scheme.primary,
        },
        {
          cursor: scheme.secondary,
          selection: `${scheme.secondaryContainer}66`,
          background: scheme.secondary,
        },
        {
          cursor: scheme.tertiary,
          selection: `${scheme.tertiaryContainer}66`,
          background: scheme.tertiary,
        },
        {
          cursor: term.normal.red,
          selection: `${scheme.errorContainer}66`,
          background: term.normal.red,
        },
      ],

      "drop_target.background": scheme.primaryContainer,
    };
  }
}
