import { Injectable, computed, signal } from '@angular/core';
import type { ThemeMode } from '@workspace/models';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';
  private readonly theme = signal<ThemeMode>(
    (localStorage.getItem(this.storageKey) as ThemeMode) || 'light',
  );

  readonly currentTheme = computed(() => this.theme());

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const nextTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(nextTheme);
    localStorage.setItem(this.storageKey, nextTheme);
    this.applyTheme(nextTheme);
  }

  private applyTheme(theme: ThemeMode): void {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}
