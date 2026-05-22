import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section class="container-fluid px-0">
      <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
          <span class="badge text-bg-success rounded-pill mb-2"
            >Billing Remote</span
          >
          <h1 class="h3 fw-bold">Billing Operations</h1>
          <p class="text-body-secondary mb-0">
            Track invoices, payments, revenue health, and billing reports.
          </p>
        </div>
      </div>

      <ul class="nav nav-tabs mb-4">
        @for (tab of tabs; track tab.route) {
          <li class="nav-item">
            <a class="nav-link" [routerLink]="tab.route">{{ tab.label }}</a>
          </li>
        }
      </ul>

      <div class="row g-3">
        @for (link of links; track link.route) {
          <div class="col-12 col-md-6 col-xl-4">
            <a
              class="card border-0 shadow-sm rounded-4 h-100 text-decoration-none"
              [routerLink]="link.route"
            >
              <div class="card-body p-4">
                <i [class]="link.icon" class="fs-3 text-success"></i>
                <h2 class="h5 mt-3 text-body">{{ link.label }}</h2>
                <p class="text-body-secondary mb-0">{{ link.description }}</p>
              </div>
            </a>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntry {
  readonly tabs = [
    { label: 'Overview', route: './' },
    { label: 'Invoices', route: 'invoices' },
    { label: 'Payments', route: 'payments' },
  ];

  readonly links = [
    {
      label: 'Invoices',
      route: 'invoices',
      icon: 'bi bi-receipt',
      description: 'Manage invoice lifecycle and approvals.',
    },
    {
      label: 'Payments',
      route: 'payments',
      icon: 'bi bi-credit-card',
      description: 'Review payment status and reconciliation.',
    },
    {
      label: 'Billing Reports',
      route: 'reports',
      icon: 'bi bi-graph-up-arrow',
      description: 'Analyze billing performance.',
    },
  ];
}
