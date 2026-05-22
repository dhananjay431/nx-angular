import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-invoices-page',
  template: `
    <section class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <h1 class="h4 fw-bold">Invoices</h1>
        <p class="text-body-secondary">
          Review open invoices and approval status.
        </p>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <div class="p-3 rounded-3 bg-body-tertiary">
              <div class="small text-body-secondary">Pending</div>
              <div class="h3 mb-0">42</div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-3 rounded-3 bg-body-tertiary">
              <div class="small text-body-secondary">Value</div>
              <div class="h3 mb-0">₹18.2L</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesPage {}
