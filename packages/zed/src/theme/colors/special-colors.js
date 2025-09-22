import { SchemeValidator } from "../scheme-validator.js";

export class SpecialColors {
  static mapSpecialColors(scheme) {
    return {
      // Shadow and overlay colors
      shadow: scheme.shadow,
      scrim: scheme.scrim,

      // Inverse colors for contrast
      "inverse.surface": scheme.inverseSurface,
      "inverse.on_surface": scheme.inverseOnSurface,
      "inverse.primary": scheme.inversePrimary,

      // Version control states using  semantic colors
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

      // Player colors for collaboration
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

      // Drop target using primary container
      "drop_target.background": scheme.primaryContainer,
    };
  }
}
