import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sales-reports-page',
  template: `
    <section class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <h1 class="h4 fw-bold">Sales Reports</h1>
        <p class="text-body-secondary">
          Monitor regional sales, revenue trends, and conversion performance.
        </p>
        <div
          class="progress mb-3"
          role="progressbar"
          aria-label="Sales target"
          aria-valuenow="78"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 78%">78%</div>
        </div>
        <span class="badge text-bg-info">Q2 target progress</span>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesReportsPage {}
