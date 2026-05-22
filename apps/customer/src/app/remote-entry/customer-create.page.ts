import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-create-page',
  template: `
    <section class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <h1 class="h4 fw-bold">Create Customer</h1>
        <p class="text-body-secondary">
          Start a guided onboarding workflow for a new customer.
        </p>
        <form class="row g-3">
          <div class="col-12 col-md-6">
            <label class="form-label" for="customerName">Customer name</label>
            <input
              id="customerName"
              class="form-control"
              placeholder="Acme Global"
            />
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="segment">Segment</label>
            <select id="segment" class="form-select">
              <option>Enterprise</option>
              <option>Mid-market</option>
              <option>Small business</option>
            </select>
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-primary">Create draft</button>
          </div>
        </form>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerCreatePage {}
