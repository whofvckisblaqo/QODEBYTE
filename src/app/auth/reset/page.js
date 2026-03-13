"use client";
import { useState } from "react";
import Link from "next/link";

export default function ResetPage() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7f8] flex flex-col">

      <main className="flex-1 flex justify-center py-10 md:py-20 px-4">
        <div className="flex flex-col w-full max-w-[480px]">

          {/* Branding */}
          <div className="mb-8">
            <Link href="/" className="text-xl font-black tracking-tight text-slate-900 hover:text-[#137fec] transition-colors">
              Qodebyte Academy
            </Link>
            <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight mt-6">Reset Password</h1>
            <p className="text-slate-600 text-base mt-2">Please enter your new password below to secure your account.</p>
          </div>

          <div className="flex flex-col gap-6">
            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-semibold">New Password</label>
              <div className="relative flex items-stretch">
                <input className="block w-full rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 outline-none h-14 px-4 pr-12 text-base placeholder:text-slate-400" placeholder="Enter new password" type={showNew ? "text" : "password"} />
                <button onClick={() => setShowNew(!showNew)} className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-slate-500 hover:text-[#137fec]" type="button">
                  <span className="material-symbols-outlined">{showNew ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
              <p className="text-xs text-slate-500">Must be at least 8 characters long.</p>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-semibold">Confirm New Password</label>
              <div className="relative flex items-stretch">
                <input className="block w-full rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 outline-none h-14 px-4 pr-12 text-base placeholder:text-slate-400" placeholder="Re-enter new password" type={showConfirm ? "text" : "password"} />
                <button onClick={() => setShowConfirm(!showConfirm)} className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-slate-500 hover:text-[#137fec]" type="button">
                  <span className="material-symbols-outlined">{showConfirm ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button className="w-full flex items-center justify-center rounded-lg h-14 px-5 bg-[#137fec] text-white text-base font-bold transition-all hover:bg-[#137fec]/90 shadow-lg shadow-[#137fec]/20 active:scale-[0.98]" type="button" onClick={() => window.location.href='/auth/success'}>
                Update Password
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/auth/login" className="text-[#137fec] hover:underline flex items-center gap-2 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Login
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 text-center border-t border-slate-200">
        <p className="text-slate-500 text-sm">© 2025 Qodebyte Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}