import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Call onLogin or API here
    if (!form.email || !form.password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }
    await onLogin?.(form, setError, setLoading);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-6 border border-gray-100" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2 text-center">Sign in to ReferPro</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <input
          className="border border-gray-200 rounded-lg px-4 py-3 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-100"
          name="email"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <input
          className="border border-gray-200 rounded-lg px-4 py-3 text-base font-light focus:outline-none focus:ring-2 focus:ring-blue-100"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button
          className="bg-gray-900 text-white rounded-lg px-4 py-3 font-semibold hover:bg-gray-800 disabled:opacity-50 transition text-base"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <div className="text-center text-sm text-gray-500">
          New to ReferPro? <a href="/signup" className="text-blue-700 hover:underline font-semibold">Create an account</a>
        </div>
      </form>
    </div>
  );
}
