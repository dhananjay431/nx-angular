import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  inject,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { apiErrorInterceptor } from '@workspace/api';
import { ModuleAccessService, tokenInterceptor } from '@workspace/auth';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptors([tokenInterceptor, apiErrorInterceptor]),
    ),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const moduleAccessService = inject(ModuleAccessService);
        return () => moduleAccessService.loadConfig();
      },
    },
  ],
};
