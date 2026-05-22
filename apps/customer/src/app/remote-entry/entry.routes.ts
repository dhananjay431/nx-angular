import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntry },
  {
    path: 'list',
    loadComponent: () =>
      import('./customer-list.page').then((m) => m.CustomerListPage),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./customer-create.page').then((m) => m.CustomerCreatePage),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./entry').then((m) => m.RemoteEntry),
  },
];
