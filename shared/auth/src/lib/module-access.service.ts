import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { MenuItem, ModuleConfig } from '@workspace/models';
import { filterMenuByModules } from '@workspace/utils';
import { AuthService } from './auth.service';

const FALLBACK_MODULES: ModuleConfig = {
  customerA: {
    modules: ['dashboard', 'customer', 'billing', 'profile', 'settings'],
  },
  customerB: { modules: ['dashboard', 'reports', 'profile', 'settings'] },
  customerC: {
    modules: [
      'dashboard',
      'customer',
      'billing',
      'reports',
      'profile',
      'settings',
    ],
  },
};

@Injectable({ providedIn: 'root' })
export class ModuleAccessService {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly config = signal<ModuleConfig>(FALLBACK_MODULES);

  readonly enabledModules = computed(() => {
    const customerId = this.authService.customerId();
    return this.config()[customerId]?.modules ?? ['dashboard'];
  });

  loadConfig(): void {
    this.http
      .get<ModuleConfig>('/assets/config/customer-modules.json')
      .subscribe({ next: (config) => this.config.set(config) });
  }

  hasModule(moduleKey: string): boolean {
    return this.enabledModules().includes(moduleKey);
  }

  filterMenu(menuItems: MenuItem[]): MenuItem[] {
    return filterMenuByModules(menuItems, this.enabledModules());
  }
}
