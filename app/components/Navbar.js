"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [role, setRole] = useState(null);
  
  const isHomePage = pathname === "/";
  const isAuthPage = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  // Don't show navbar on login/register pages
  if (isAuthPage) {
    return null;
  }

  function logout() {
    localStorage.removeItem("role");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    router.push("/login");
  }

  return (
<nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
<h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              HostelFlow
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Complaint Management
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isHomePage ? (
            <>
              <a href="/#features" className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200">
                Features
              </a>
              <a href="/#benefits" className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200">
                Benefits
              </a>
              <a href="/#how-it-works" className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200">
                How It Works
              </a>
              <a href="/login" className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200">
                Login
              </a>
              <a href="/register" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-200">
                Register
              </a>
            </>
) : role === "student" ? (
            <>
              <a href="/student" className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg transition-all duration-200">
                My Complaints
              </a>
              <button
                onClick={logout}
                className="ml-2 px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </>
          ) : role === "admin" ? (
            <>
              <a href="/admin" className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg transition-all duration-200">
                Dashboard
              </a>
              <button
                onClick={logout}
                className="ml-2 px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/" className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200">
                Home
              </a>
              <button
                onClick={logout}
                className="ml-2 px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
