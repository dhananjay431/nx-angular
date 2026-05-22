export * from './lib/dashboard/dashboard';

import { Route } from '@angular/router';
import { Dashboard } from './lib/dashboard/dashboard';

export const dashboardRoutes: Route[] = [{ path: '', component: Dashboard }];
