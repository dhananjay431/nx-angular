import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ModuleAccessService } from './module-access.service';

export const permissionGuard: CanActivateFn = (route) => {
  const moduleAccessService = inject(ModuleAccessService);
  const router = inject(Router);
  const moduleKey = route.data?.['moduleKey'] as string | undefined;

  if (!moduleKey || moduleAccessService.hasModule(moduleKey)) {
    return true;
  }

  return router.createUrlTree(['/dashboard']);
};
