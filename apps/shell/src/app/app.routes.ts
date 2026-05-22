import { Route } from '@angular/router';
import { authGuard, permissionGuard } from '@workspace/auth';
import { MainLayoutComponent } from '@workspace/layout';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@workspace/auth').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        canActivate: [permissionGuard],
        data: { moduleKey: 'dashboard' },
        loadChildren: () =>
          import('@workspace/dashboard').then((m) => m.dashboardRoutes),
      },
      {
        path: 'customer',
        canActivate: [permissionGuard],
        data: { moduleKey: 'customer' },
        loadChildren: () =>
          import('customer/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'billing',
        canActivate: [permissionGuard],
        data: { moduleKey: 'billing' },
        loadChildren: () =>
          import('billing/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'reports',
        canActivate: [permissionGuard],
        data: { moduleKey: 'reports' },
        loadChildren: () =>
          import('reports/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'profile',
        canActivate: [permissionGuard],
        data: { moduleKey: 'profile' },
        loadChildren: () =>
          import('@workspace/profile').then((m) => m.profileRoutes),
      },
      {
        path: 'settings',
        canActivate: [permissionGuard],
        data: { moduleKey: 'settings' },
        loadChildren: () =>
          import('@workspace/settings').then((m) => m.settingsRoutes),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
