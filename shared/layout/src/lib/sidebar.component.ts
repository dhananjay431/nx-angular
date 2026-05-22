import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, ModuleAccessService } from '@workspace/auth';
import { MENU_ITEMS } from './menu.config';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'lib-sidebar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="app-sidebar border-end bg-body-tertiary h-100">
      <div class="p-3 border-bottom">
        <div class="small text-uppercase text-body-secondary">Customer</div>
        <div class="fw-semibold">{{ authService.customerId() }}</div>
      </div>

      <nav
        class="nav nav-pills flex-column gap-1 p-3"
        aria-label="Main navigation"
      >
        @for (item of visibleMenu(); track item.route) {
          <a
            class="nav-link d-flex align-items-center gap-2"
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
            (click)="closeOnMobile()"
          >
            <i [class]="item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        }

        <button
          class="btn btn-link nav-link text-danger text-start mt-3"
          (click)="logout()"
        >
          <i class="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </nav>
    </aside>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly authService = inject(AuthService);
  private readonly moduleAccessService = inject(ModuleAccessService);
  private readonly sidebarService = inject(SidebarService);
  private readonly router = inject(Router);

  readonly visibleMenu = computed(() =>
    this.moduleAccessService.filterMenu(MENU_ITEMS),
  );

  closeOnMobile(): void {
    if (window.innerWidth < 768) {
      this.sidebarService.close();
    }
  }

  logout(): void {
    this.authService.logout(this.router);
  }
}
