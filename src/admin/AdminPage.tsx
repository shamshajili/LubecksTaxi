import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

export default function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem("admin_token"));

  const handleLogin = (t: string) => setToken(t);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
  };

  return token ? (
    <AdminPanel onLogout={handleLogout} />
  ) : (
    <AdminLogin onLogin={handleLogin} />
  );
}
