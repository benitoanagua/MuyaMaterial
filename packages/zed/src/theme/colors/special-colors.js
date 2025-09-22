import { SchemeValidator } from "../scheme-validator.js";

export class SpecialColors {
  static mapSpecialColors(scheme) {
    return {
      shadow: scheme.shadow,
      scrim: scheme.scrim,

      "inverse.surface": scheme.inverseSurface,
      "inverse.on_surface": scheme.inverseOnSurface,
      "inverse.primary": scheme.inversePrimary,

      "created.background": scheme.secondaryContainer,
      "created.border": scheme.secondary,

      "modified.background": scheme.primaryContainer,
      "modified.border": scheme.primary,

      "deleted.background": scheme.errorContainer,
      "deleted.border": scheme.error,

      "conflict.background": scheme.tertiaryContainer,
      "conflict.border": scheme.tertiary,

      "renamed.background": scheme.secondaryContainer,
      "renamed.border": scheme.secondary,

      players: [
        {
          cursor: scheme.primary,
          selection: scheme.primaryContainer,
          background: scheme.primary,
        },
        {
          cursor: scheme.secondary,
          selection: scheme.secondaryContainer,
          background: scheme.secondary,
        },
        {
          cursor: scheme.tertiary,
          selection: scheme.tertiaryContainer,
          background: scheme.tertiary,
        },
      ],

      "drop_target.background": scheme.primaryContainer,
    };
  }
}
