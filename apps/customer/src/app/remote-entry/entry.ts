import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section class="container-fluid px-0">
      <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
          <span class="badge text-bg-primary rounded-pill mb-2"
            >Customer Remote</span
          >
          <h1 class="h3 fw-bold">Customer Management</h1>
          <p class="text-body-secondary mb-0">
            Manage enterprise customers, accounts, contacts, and onboarding
            workflows.
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
          <div class="col-12 col-md-6 col-xl-3">
            <a
              class="card border-0 shadow-sm rounded-4 h-100 text-decoration-none"
              [routerLink]="link.route"
            >
              <div class="card-body p-4">
                <i [class]="link.icon" class="fs-3 text-primary"></i>
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
    { label: 'Customer List', route: 'list' },
    { label: 'Create Customer', route: 'create' },
  ];

  readonly links = [
    {
      label: 'Customer List',
      route: 'list',
      icon: 'bi bi-list-ul',
      description: 'Browse and filter customer records.',
    },
    {
      label: 'Create Customer',
      route: 'create',
      icon: 'bi bi-person-plus',
      description: 'Start a new onboarding flow.',
    },
    {
      label: 'Customer Details',
      route: 'details/1001',
      icon: 'bi bi-person-lines-fill',
      description: 'Review a sample customer profile.',
    },
    {
      label: 'Segments',
      route: 'segments',
      icon: 'bi bi-diagram-3',
      description: 'Organize customers by segment.',
    },
  ];
}
