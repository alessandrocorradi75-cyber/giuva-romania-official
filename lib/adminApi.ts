export type UserRole = "public" | "volunteer" | "coordinator" | "admin";

export type AdminUser = {
  id: string;
  email: string;
  role: UserRole;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
};

export type Organization = {
  id: string;
  parent_id: string | null;
  type: string;
  code: string;
  name: string;
  legal_name: string | null;
  country_code: string | null;
  region: string | null;
  city: string | null;
  timezone: string | null;
  description: string | null;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

const defaultApiBaseUrl = "http://127.0.0.1:8000/api/v1";

export function getAdminApiBaseUrl() {
  return (process.env.NEXT_PUBLIC_API_BASE_URL || defaultApiBaseUrl).replace(/\/$/, "");
}

export class AdminApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "AdminApiError";
    this.status = status;
  }
}

async function adminRequest<T>(path: string, token: string | null, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");

  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${getAdminApiBaseUrl()}${path}`, {
    ...init,
    headers,
    cache: "no-store"
  });

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    try {
      const payload = (await response.json()) as { detail?: string };
      if (payload.detail) {
        message = payload.detail;
      }
    } catch {
      // Keep the generic status message when the backend does not return JSON.
    }
    throw new AdminApiError(message, response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export async function loginAdmin(email: string, password: string) {
  return adminRequest<LoginResponse>("/auth/login", null, {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
}

export async function fetchCurrentAdminUser(token: string) {
  return adminRequest<AdminUser>("/auth/me", token);
}

export async function fetchAdminOrganizations(token: string) {
  return adminRequest<Organization[]>("/organizations", token);
}

export async function fetchAdminOrganization(token: string, organizationId: string) {
  return adminRequest<Organization>(`/organizations/${organizationId}`, token);
}

export async function fetchAdminUsers(token: string) {
  return adminRequest<AdminUser[]>("/users", token);
}

export async function fetchAdminUser(token: string, userId: string) {
  return adminRequest<AdminUser>(`/users/${userId}`, token);
}
