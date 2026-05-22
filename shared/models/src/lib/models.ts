export type ThemeMode = 'light' | 'dark';

export interface User {
  id: string;
  name: string;
  email: string;
  customerId: string;
  roles: Role[];
  permissions: Permission[];
}

export interface Role {
  key: string;
  label: string;
}

export interface Permission {
  key: string;
  description?: string;
}

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
  moduleKey: string;
}

export interface CustomerModuleConfig {
  modules: string[];
}

export type ModuleConfig = Record<string, CustomerModuleConfig>;

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}
