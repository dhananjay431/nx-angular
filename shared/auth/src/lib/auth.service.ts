import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import type { User } from '@workspace/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'auth-user';
  private readonly currentUserSignal = signal<User | null>(
    this.readStoredUser(),
  );

  readonly currentUser = computed(() => this.currentUserSignal());
  readonly isAuthenticated = computed(() => Boolean(this.currentUserSignal()));
  readonly customerId = computed(
    () => this.currentUserSignal()?.customerId ?? 'customerC',
  );

  login(email: string, _password: string, rememberMe = true): void {
    const user: User = {
      id: 'u-1001',
      name: 'Enterprise Admin',
      email,
      customerId: 'customerC',
      roles: [{ key: 'admin', label: 'Administrator' }],
      permissions: [
        { key: 'dashboard:view' },
        { key: 'customer:view' },
        { key: 'billing:view' },
        { key: 'reports:view' },
      ],
    };

    this.currentUserSignal.set(user);

    if (rememberMe) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
    }
  }

  logout(router?: Router): void {
    this.currentUserSignal.set(null);
    localStorage.removeItem(this.storageKey);
    void router?.navigateByUrl('/login');
  }

  hasPermission(permissionKey: string): boolean {
    return (
      this.currentUserSignal()?.permissions.some(
        (permission) => permission.key === permissionKey,
      ) ?? false
    );
  }

  private readStoredUser(): User | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    const rawUser = localStorage.getItem(this.storageKey);
    return rawUser ? (JSON.parse(rawUser) as User) : null;
  }
}
