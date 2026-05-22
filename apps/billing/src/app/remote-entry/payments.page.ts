import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payments-page',
  template: `
    <section class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <h1 class="h4 fw-bold">Payments</h1>
        <p class="text-body-secondary">
          Track payment reconciliation and settlement health.
        </p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between px-0">
            <span>UPI settlement</span
            ><span class="badge text-bg-success">Settled</span>
          </li>
          <li class="list-group-item d-flex justify-content-between px-0">
            <span>Bank transfer batch</span
            ><span class="badge text-bg-warning">Processing</span>
          </li>
        </ul>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsPage {}
