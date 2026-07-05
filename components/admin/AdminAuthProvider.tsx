"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { fetchCurrentAdminUser, loginAdmin, type AdminUser } from "@/lib/adminApi";

type AdminAuthContextValue = {
  token: string | null;
  user: AdminUser | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshCurrentUser: () => Promise<void>;
};

const tokenStorageKey = "giuva.internal.admin.token";
const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clearSession = useCallback(() => {
    sessionStorage.removeItem(tokenStorageKey);
    setToken(null);
    setUser(null);
  }, []);

  const loadCurrentUser = useCallback(
    async (activeToken: string) => {
      const currentUser = await fetchCurrentAdminUser(activeToken);
      setUser(currentUser);
    },
    []
  );

  useEffect(() => {
    const storedToken = sessionStorage.getItem(tokenStorageKey);
    if (!storedToken) {
      setLoading(false);
      return;
    }

    setToken(storedToken);
    loadCurrentUser(storedToken)
      .catch((caught: unknown) => {
        clearSession();
        setError(caught instanceof Error ? caught.message : "Unable to restore admin session");
      })
      .finally(() => setLoading(false));
  }, [clearSession, loadCurrentUser]);

  const login = useCallback(
    async (email: string, password: string) => {
      setError(null);
      const response = await loginAdmin(email, password);
      sessionStorage.setItem(tokenStorageKey, response.access_token);
      setToken(response.access_token);
      await loadCurrentUser(response.access_token);
    },
    [loadCurrentUser]
  );

  const logout = useCallback(() => {
    setError(null);
    clearSession();
  }, [clearSession]);

  const refreshCurrentUser = useCallback(async () => {
    if (!token) {
      return;
    }
    await loadCurrentUser(token);
  }, [loadCurrentUser, token]);

  const value = useMemo(
    () => ({ token, user, loading, error, login, logout, refreshCurrentUser }),
    [token, user, loading, error, login, logout, refreshCurrentUser]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
}
