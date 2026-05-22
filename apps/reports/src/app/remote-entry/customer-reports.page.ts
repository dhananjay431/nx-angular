import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-reports-page',
  template: `
    <section class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <h1 class="h4 fw-bold">Customer Reports</h1>
        <p class="text-body-secondary">
          Analyze customer acquisition, retention, and account health.
        </p>
        <div class="row g-3">
          <div class="col-12 col-md-4">
            <div class="border rounded-3 p-3">
              <div class="small text-body-secondary">Retention</div>
              <div class="h4 mb-0">94%</div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="border rounded-3 p-3">
              <div class="small text-body-secondary">New accounts</div>
              <div class="h4 mb-0">126</div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="border rounded-3 p-3">
              <div class="small text-body-secondary">At risk</div>
              <div class="h4 mb-0">8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerReportsPage {}
