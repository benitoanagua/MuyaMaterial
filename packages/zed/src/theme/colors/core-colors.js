import { SchemeValidator } from "../scheme-validator.js";

export class CoreColors {
  static mapCoreColors(scheme) {
    SchemeValidator.validateScheme(scheme);

    return {
      // Primary colors ( core)
      primary: scheme.primary,
      onPrimary: scheme.onPrimary,
      primaryContainer: scheme.primaryContainer,
      onPrimaryContainer: scheme.onPrimaryContainer,

      // Secondary colors ( core)
      secondary: scheme.secondary,
      onSecondary: scheme.onSecondary,
      secondaryContainer: scheme.secondaryContainer,
      onSecondaryContainer: scheme.onSecondaryContainer,

      // Tertiary colors ( core)
      tertiary: scheme.tertiary,
      onTertiary: scheme.onTertiary,
      tertiaryContainer: scheme.tertiaryContainer,
      onTertiaryContainer: scheme.onTertiaryContainer,

      // Error colors ( core)
      error: scheme.error,
      onError: scheme.onError,
      errorContainer: scheme.errorContainer,
      onErrorContainer: scheme.onErrorContainer,

      // Background colors ( core)
      background: scheme.background,
      onBackground: scheme.onBackground,
      surface: scheme.surface,
      onSurface: scheme.onSurface,
      surfaceVariant: scheme.surfaceVariant,
      onSurfaceVariant: scheme.onSurfaceVariant,
      outline: scheme.outline,
      outlineVariant: scheme.outlineVariant,
    };
  }
}
