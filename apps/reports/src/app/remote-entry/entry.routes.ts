import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntry },
  {
    path: 'sales',
    loadComponent: () =>
      import('./sales-reports.page').then((m) => m.SalesReportsPage),
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./customer-reports.page').then((m) => m.CustomerReportsPage),
  },
  {
    path: 'billing',
    loadComponent: () => import('./entry').then((m) => m.RemoteEntry),
  },
];
