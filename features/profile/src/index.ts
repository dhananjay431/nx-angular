export * from './lib/profile/profile';

import { Route } from '@angular/router';
import { Profile } from './lib/profile/profile';

export const profileRoutes: Route[] = [{ path: '', component: Profile }];
