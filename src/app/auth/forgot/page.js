"use client";
import Link from "next/link";

export default function ForgotPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] flex flex-col">
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-b from-[#137fec]/10 to-transparent blur-3xl -z-10 opacity-50" />

      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-[480px] space-y-8">

          {/* Branding */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-900 hover:text-[#137fec] transition-colors">
              Qodebyte Academy
            </Link>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Forgot Password</h2>
                <p className="mt-2 text-slate-500">No worries, it happens. Enter your email and we&apos;ll send you a reset link.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-slate-400 group-focus-within:text-[#137fec] transition-colors text-xl">mail</span>
                    </div>
                    <input className="block w-full rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 transition-all outline-none" placeholder="name@example.com" type="email" />
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#137fec] hover:bg-[#137fec]/90 py-3.5 px-4 text-white font-bold transition-all shadow-md shadow-[#137fec]/10 active:scale-[0.98]" type="button" onClick={() => window.location.href='/auth/otp'}>
                  <span>Send Reset Link</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>

              {/* Back */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <Link href="/auth/login" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#137fec] transition-colors">
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back to Login
                </Link>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Need help?{" "}
              <a href="https://wa.me/2349125771177" className="text-[#137fec] font-medium hover:underline">Contact Support</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}