import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntry },
  {
    path: 'invoices',
    loadComponent: () => import('./invoices.page').then((m) => m.InvoicesPage),
  },
  {
    path: 'payments',
    loadComponent: () => import('./payments.page').then((m) => m.PaymentsPage),
  },
  {
    path: 'reports',
    loadComponent: () => import('./entry').then((m) => m.RemoteEntry),
  },
];
