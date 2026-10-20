"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type UserData = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  websiteId: string;
};

type AuthContextType = {
  email: string | null;
  token: string | null;
  userData: UserData | null;
  login: (email: string, token: string, userData: UserData) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  email: null,
  token: null,
  userData: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const STORAGE_KEY = "spacenexus_auth";

export function getStoredAuth(): { email: string | null; token: string | null } {
  if (typeof window === "undefined") return { email: null, token: null };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { email: parsed.email || null, token: parsed.token || null };
    }
  } catch {}
  return { email: null, token: null };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setEmail(parsed.email || null);
        setToken(parsed.token || null);
        setUserData(parsed.userData || null);
      } catch {}
    }
  }, []);

  const login = (newEmail: string, newToken: string, newUserData: UserData) => {
    setEmail(newEmail);
    setToken(newToken);
    setUserData(newUserData);
    const data = JSON.stringify({ email: newEmail, token: newToken, userData: newUserData });
    localStorage.setItem(STORAGE_KEY, data);
  };

  const logout = () => {
    setEmail(null);
    setToken(null);
    setUserData(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ email, token, userData, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
