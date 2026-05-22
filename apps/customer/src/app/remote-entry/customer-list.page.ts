import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-list-page',
  template: `
    <section class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <h1 class="h4 fw-bold">Customer List</h1>
        <p class="text-body-secondary">
          Search, filter, and manage enterprise customer accounts.
        </p>
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Segment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acme Global</td>
                <td>Enterprise</td>
                <td><span class="badge text-bg-success">Active</span></td>
              </tr>
              <tr>
                <td>Northwind Traders</td>
                <td>Mid-market</td>
                <td><span class="badge text-bg-warning">Review</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListPage {}
