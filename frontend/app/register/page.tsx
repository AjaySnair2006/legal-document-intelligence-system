"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Temporary mock registration.
    // We will connect this to FastAPI/PostgreSQL later.
    console.log("Registration data:", formData);

    alert("Registration successful! Backend integration will be added later.");
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

      {/* Soft glow */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#b9788a]/15 blur-[130px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Branding */}
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

          {/* Register card */}
          <div className="rounded-3xl border border-[#d6a0ae]/20 bg-[#171014]/90 p-7 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-8">
            <div className="mb-7">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create your account
              </h1>

              <p className="mt-2 text-sm leading-6 text-[#ead6dc]/55">
                Create your LegalAI workspace and start exploring your legal
                documents.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#f4e7eb]"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#0f0b0d]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#ead6dc]/25 focus:border-[#b9788a] focus:ring-2 focus:ring-[#b9788a]/20"
                />
              </div>

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
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#f4e7eb]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimum 8 characters"
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

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-[#f4e7eb]"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        confirmPassword: event.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#0f0b0d]/80 px-4 py-3 pr-20 text-sm text-white outline-none transition placeholder:text-[#ead6dc]/25 focus:border-[#b9788a] focus:ring-2 focus:ring-[#b9788a]/20"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#d6a0ae] transition hover:text-white"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#b9788a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#b9788a]/20 transition hover:bg-[#c48798] hover:shadow-[#b9788a]/30"
              >
                Create account
              </button>
            </form>

            {/* Login link */}
            <p className="mt-6 text-center text-sm text-[#ead6dc]/50">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-[#d6a0ae] transition hover:text-white"
              >
                Sign in
              </a>
            </p>

            {/* Disclaimer */}
            <p className="mt-7 border-t border-[#d6a0ae]/10 pt-5 text-center text-[11px] leading-5 text-[#ead6dc]/30">
              By creating an account, you agree to use this system for
              document analysis and research purposes. AI-generated
              information should not be considered professional legal advice.
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