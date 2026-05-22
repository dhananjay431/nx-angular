import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section class="container-fluid px-0">
      <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
          <span class="badge text-bg-info rounded-pill mb-2"
            >Reports Remote</span
          >
          <h1 class="h3 fw-bold">Enterprise Reports</h1>
          <p class="text-body-secondary mb-0">
            Explore sales, customer, and billing analytics with lazy-loaded
            reports.
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
                <i [class]="link.icon" class="fs-3 text-info"></i>
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
    { label: 'Sales Reports', route: 'sales' },
    { label: 'Customer Reports', route: 'customer' },
  ];

  readonly links = [
    {
      label: 'Sales Reports',
      route: 'sales',
      icon: 'bi bi-cash-coin',
      description: 'Track revenue and sales trends.',
    },
    {
      label: 'Customer Reports',
      route: 'customer',
      icon: 'bi bi-people',
      description: 'Understand customer growth and retention.',
    },
    {
      label: 'Billing Reports',
      route: 'billing',
      icon: 'bi bi-receipt-cutoff',
      description: 'Analyze billing and collection metrics.',
    },
  ];
}
