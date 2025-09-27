export class SpecialColors {
  static mapSpecialColors(scheme) {
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
          selection: `${scheme.primary}4d`,
          background: scheme.primary,
        },
        {
          cursor: scheme.secondary,
          selection: `${scheme.secondary}4d`,
          background: scheme.secondary,
        },
        {
          cursor: scheme.tertiary,
          selection: `${scheme.tertiary}4d`,
          background: scheme.tertiary,
        },
        {
          cursor: scheme.error,
          selection: `${scheme.error}4d`,
          background: scheme.error,
        },
      ],

      "drop_target.background": `${scheme.primaryContainer}80`,
    };
  }
}
