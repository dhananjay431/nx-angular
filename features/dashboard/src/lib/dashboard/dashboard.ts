import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  readonly summaries = [
    {
      label: 'Active customers',
      value: '1,284',
      icon: 'bi bi-people',
      tone: 'primary',
    },
    {
      label: 'Open invoices',
      value: '342',
      icon: 'bi bi-receipt',
      tone: 'success',
    },
    {
      label: 'Reports generated',
      value: '89',
      icon: 'bi bi-bar-chart',
      tone: 'warning',
    },
    {
      label: 'SLA health',
      value: '99.9%',
      icon: 'bi bi-shield-check',
      tone: 'info',
    },
  ];
}
