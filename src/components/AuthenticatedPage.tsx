import { Suspense, useEffect } from "react";
import { Link, Outlet } from "react-router";

import { AuthenticationContext } from "@/AuthenticationContext";

export default function AuthenticatedPage() {
  useEffect(() => {
    console.warn("authenticating");
    return () => {
      console.warn("logging out");
    };
  });
  return (
    <main>
      <AuthenticationContext.Provider value={{ user: "Roger" }}>
        <header>
          <nav className="text-3xl font-bold text-slate-200 underline">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AuthenticationContext.Provider>
    </main>
  );
}
