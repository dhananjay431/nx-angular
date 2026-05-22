import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@workspace/auth';
import { SidebarService } from './sidebar.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'lib-top-menubar',
  imports: [RouterLink],
  template: `
    <nav
      class="navbar navbar-expand-lg sticky-top border-bottom bg-body shadow-sm"
    >
      <div class="container-fluid">
        <button
          type="button"
          class="btn btn-outline-secondary me-2"
          aria-label="Toggle sidebar"
          (click)="sidebarService.toggle()"
        >
          <i class="bi bi-list"></i>
        </button>

        <a class="navbar-brand fw-bold" routerLink="/dashboard">
          <i class="bi bi-grid-1x2-fill text-primary me-2"></i>
          Umbrella ERP
        </a>

        <div class="ms-auto d-flex align-items-center gap-2">
          <button
            type="button"
            class="btn btn-outline-secondary"
            aria-label="Toggle theme"
            (click)="themeService.toggleTheme()"
          >
            <i
              class="bi"
              [class.bi-sun]="themeService.currentTheme() === 'dark'"
              [class.bi-moon-stars]="themeService.currentTheme() === 'light'"
            ></i>
          </button>

          <div class="dropdown">
            <button
              class="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle me-1"></i>
              {{ authService.currentUser()?.name ?? 'User' }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow">
              <li>
                <a class="dropdown-item" routerLink="/profile">Profile</a>
              </li>
              <li>
                <a class="dropdown-item" routerLink="/settings">Settings</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item text-danger" (click)="logout()">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenubarComponent {
  readonly sidebarService = inject(SidebarService);
  readonly themeService = inject(ThemeService);
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  logout(): void {
    this.authService.logout(this.router);
  }
}
