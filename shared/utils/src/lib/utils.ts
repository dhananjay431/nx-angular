import type { MenuItem, ThemeMode } from '@workspace/models';

export function getStoredValue(key: string, fallback = ''): string {
  if (typeof localStorage === 'undefined') {
    return fallback;
  }

  return localStorage.getItem(key) ?? fallback;
}

export function setStoredValue(key: string, value: string): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, value);
  }
}

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

export function filterMenuByModules(
  menuItems: MenuItem[],
  enabledModules: string[],
): MenuItem[] {
  return menuItems.filter((item) => enabledModules.includes(item.moduleKey));
}

export function formatShortDate(value: Date | string): string {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}
