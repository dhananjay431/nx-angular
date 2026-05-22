export * from './lib/settings/settings';

import { Route } from '@angular/router';
import { Settings } from './lib/settings/settings';

export const settingsRoutes: Route[] = [{ path: '', component: Settings }];
