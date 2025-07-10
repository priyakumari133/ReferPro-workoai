

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    if (window.showToast) {
      window.showToast("Logged out successfully!");
      setTimeout(() => { window.location.href = "/"; }, 1200);
    } else {
      window.location.href = "/";
    }
  };
  return (
    <nav className="w-full flex justify-center items-center py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="flex gap-8 items-center bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-gray-100">
        <Link to="/" className="text-base font-semibold text-gray-900 hover:text-blue-700 transition">Home</Link>
        <Link to="/about" className="text-base font-semibold text-gray-900 hover:text-blue-700 transition">About</Link>
        <Link to="/metrics" className="text-base font-semibold text-gray-900 hover:text-blue-700 transition">Stories</Link>
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-full font-semibold transition text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-900 shadow"
            >
              Logout
            </button>
            <Link to="/dashboard" className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-1 rounded-full hover:from-gray-800 hover:to-black font-semibold transition">Dashboard</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-700 hover:underline font-semibold">Login</Link>
            <Link to="/signup" className="bg-gray-800 text-white px-4 py-1 rounded-full hover:bg-gray-900 font-semibold transition">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

