import { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./UserContextValue";

// Re-exporta el contexto para que otros archivos puedan importarlo desde ./UserContext
export { UserContext };

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");

  const login = useCallback(async (credentials) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.message || "Login failed");
    }
    const data = await res.json();
    setToken(data.token || null);
    setEmail(data.email || credentials.email);
    if (data.token) localStorage.setItem("token", data.token);
    if (data.email) localStorage.setItem("email", data.email);
    return data;
  }, []);

  const register = useCallback(async (payload) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.message || "Register failed");
    }
    const data = await res.json();
    setToken(data.token || null);
    setEmail(data.email || payload.email);
    if (data.token) localStorage.setItem("token", data.token);
    if (data.email) localStorage.setItem("email", data.email);
    return data;
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }, []);

  const getProfile = useCallback(async () => {
    if (!token) throw new Error("No authenticated token");
    const res = await fetch("/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.message || "Failed to fetch profile");
    }
    const data = await res.json();
    if (data.email) {
      setEmail(data.email);
      localStorage.setItem("email", data.email);
    }
    return data;
  }, [token]);

  const value = useMemo(
    () => ({ token, email, login, register, logout, getProfile }),
    [token, email, login, register, logout, getProfile]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};