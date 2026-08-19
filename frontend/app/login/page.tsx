"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    // Temporary mock login.
    // We will connect this to FastAPI/PostgreSQL later.
    console.log("Login data:", formData);

    alert("Login successful! Backend integration will be added later.");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120d10] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/legal-bg.jpg')" }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[#120d10]/85" />

      <div className="absolute inset-0 bg-gradient-to-br from-[#120d10]/95 via-[#120d10]/80 to-[#7d5261]/40" />

      {/* Soft pink glow */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#b9788a]/15 blur-[130px]" />

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* LegalAI branding */}
          <div className="mb-8 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d6a0ae]/30 bg-[#b9788a]/20 text-xl shadow-lg shadow-[#b9788a]/10">
                ⚖
              </div>

              <div className="text-left">
                <p className="font-semibold tracking-tight">
                  LegalAI
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d6a0ae]/70">
                  Intelligence System
                </p>
              </div>
            </a>
          </div>

          {/* Login card */}
          <div className="rounded-3xl border border-[#d6a0ae]/20 bg-[#171014]/90 p-7 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-8">
            <div className="mb-7">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back
              </h1>

              <p className="mt-2 text-sm leading-6 text-[#ead6dc]/55">
                Sign in to continue to your LegalAI workspace.
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#f4e7eb]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#0f0b0d]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#ead6dc]/25 focus:border-[#b9788a] focus:ring-2 focus:ring-[#b9788a]/20"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#f4e7eb]"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-[#d6a0ae] transition hover:text-white"
                    onClick={() => {
                      alert("Password reset will be connected later.");
                    }}
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        password: event.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#0f0b0d]/80 px-4 py-3 pr-20 text-sm text-white outline-none transition placeholder:text-[#ead6dc]/25 focus:border-[#b9788a] focus:ring-2 focus:ring-[#b9788a]/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#d6a0ae] transition hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#ead6dc]/55">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#d6a0ae]/30 bg-[#0f0b0d] accent-[#b9788a]"
                />

                Remember me
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#b9788a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#b9788a]/20 transition hover:bg-[#c48798] hover:shadow-[#b9788a]/30"
              >
                Sign in
              </button>
            </form>

            {/* Register link */}
            <p className="mt-6 text-center text-sm text-[#ead6dc]/50">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-medium text-[#d6a0ae] transition hover:text-white"
              >
                Create an account
              </a>
            </p>

            {/* Disclaimer */}
            <p className="mt-7 border-t border-[#d6a0ae]/10 pt-5 text-center text-[11px] leading-5 text-[#ead6dc]/30">
              LegalAI is designed to assist with legal document
              understanding. AI-generated information should not be
              considered professional legal advice.
            </p>
          </div>

          {/* Back to home */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-xs text-[#ead6dc]/40 transition hover:text-[#d6a0ae]"
            >
              ← Back to homepage
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}