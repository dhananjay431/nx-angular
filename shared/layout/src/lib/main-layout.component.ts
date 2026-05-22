import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';
import { TopMenubarComponent } from './top-menubar.component';

@Component({
  selector: 'lib-main-layout',
  imports: [RouterOutlet, SidebarComponent, TopMenubarComponent],
  template: `
    <div class="min-vh-100 bg-body">
      <lib-top-menubar />

      <div class="app-shell d-flex">
        @if (sidebarService.isOpen()) {
          <div class="sidebar-panel d-none d-md-block">
            <lib-sidebar />
          </div>

          <div class="mobile-sidebar d-md-none">
            <div class="mobile-backdrop" (click)="sidebarService.close()"></div>
            <div class="mobile-drawer shadow-lg">
              <lib-sidebar />
            </div>
          </div>
        }

        <main class="flex-grow-1 p-3 p-md-4 overflow-auto">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: `
    .app-shell {
      min-height: calc(100vh - 57px);
    }

    .sidebar-panel {
      width: 280px;
      flex: 0 0 280px;
    }

    .mobile-sidebar {
      position: fixed;
      inset: 0;
      z-index: 1040;
    }

    .mobile-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
    }

    .mobile-drawer {
      position: relative;
      width: min(85vw, 320px);
      height: 100%;
      background: var(--bs-body-bg);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  readonly sidebarService = inject(SidebarService);
}
