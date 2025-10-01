export default function getNotificationsAndBanners(scheme) {
  return {
    // Notification colors
    "notificationCenter.border": scheme.outlineVariant,
    "notificationCenterHeader.background": scheme.surfaceContainerLow,
    "notificationCenterHeader.foreground": scheme.onSurfaceVariant,
    "notificationToast.border": scheme.outlineVariant,
    "notifications.background": scheme.surfaceContainer,
    "notifications.border": scheme.surfaceContainerLowest,
    "notifications.foreground": scheme.onSurfaceVariant,
    "notificationLink.foreground": scheme.primary,
    "notificationsErrorIcon.foreground": scheme.error,
    "notificationsWarningIcon.foreground": scheme.tertiary,
    "notificationsInfoIcon.foreground": scheme.primary,

    // Banner colors
    "banner.background": scheme.surfaceContainerHigh,
    "banner.foreground": scheme.onSurface,
    "banner.iconForeground": scheme.primary,
  };
}
