export type AuthAPI = {
  email: string;
  password: string;
  fullName: string;
  role?: RoleAPI | null;
};

type RoleAPI = 'admin' | 'technician' | 'client';
