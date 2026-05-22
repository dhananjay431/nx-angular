import type { MenuItem } from '@workspace/models';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'bi bi-speedometer2',
    route: '/dashboard',
    moduleKey: 'dashboard',
  },
  {
    label: 'Customer',
    icon: 'bi bi-people',
    route: '/customer',
    moduleKey: 'customer',
  },
  {
    label: 'Billing',
    icon: 'bi bi-receipt',
    route: '/billing',
    moduleKey: 'billing',
  },
  {
    label: 'Reports',
    icon: 'bi bi-bar-chart',
    route: '/reports',
    moduleKey: 'reports',
  },
  {
    label: 'Profile',
    icon: 'bi bi-person-circle',
    route: '/profile',
    moduleKey: 'profile',
  },
  {
    label: 'Settings',
    icon: 'bi bi-gear',
    route: '/settings',
    moduleKey: 'settings',
  },
];
