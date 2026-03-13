"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7f8] flex flex-col">
      {/* Decorative blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#137fec]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#137fec]/5 rounded-full blur-[100px] pointer-events-none" />

      <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative z-10">
        <div className="flex flex-col w-full max-w-[480px]">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8 gap-3">
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-900 hover:text-[#137fec] transition-colors">
              Qodebyte Academy
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-black tracking-tight text-slate-900">Welcome Back</h1>
              <p className="text-slate-500 mt-1">Login to your Qodebyte Academy dashboard</p>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-200/50">
            <div className="space-y-5">

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#137fec] transition-colors">mail</span>
                  <input className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] transition-all outline-none" placeholder="name@example.com" type="email" />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <Link href="/auth/forgot" className="text-sm font-medium text-[#137fec] hover:underline">Forgot Password?</Link>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#137fec] transition-colors">lock</span>
                  <input className="w-full pl-10 pr-12 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] transition-all outline-none" placeholder="••••••••" type={showPassword ? "text" : "password"} />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                    <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button className="w-full bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-[#137fec]/25 transition-all active:scale-[0.98] mt-2" type="button">
                Sign In
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-slate-500 font-medium">Or continue with</span>
              </div>
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700" type="button">
                <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </button>
            </div>
          </div>

          <p className="text-center mt-6 text-slate-600">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-[#137fec] font-bold hover:underline">Sign up free</Link>
          </p>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 font-medium tracking-widest uppercase">
        © 2025 Qodebyte Academy • Enugu, Nigeria
      </footer>
    </div>
  );
}