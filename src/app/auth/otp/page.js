"use client";
import { useRef } from "react";
import Link from "next/link";

export default function OTPPage() {
  const inputs = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value[value.length - 1];
    }
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7f8] flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 px-6 md:px-10 py-4 bg-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-2 rounded-lg bg-[#137fec]/10 text-[#137fec]">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <Link href="/" className="text-slate-900 text-lg font-bold leading-tight tracking-tight hover:text-[#137fec] transition-colors">
            Qodebyte Academy
          </Link>
        </div>
        <Link href="/auth/login" className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center p-4">
        <div className="flex flex-col w-full max-w-[480px] bg-white p-8 rounded-xl shadow-sm border border-slate-200">

          {/* Icon & Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="size-16 bg-[#137fec]/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#137fec] text-4xl">mark_email_read</span>
            </div>
            <h2 className="text-slate-900 text-3xl font-bold leading-tight text-center">OTP Verification</h2>
            <p className="text-slate-500 text-base mt-2 text-center">Enter the 6-digit code sent to your email</p>
          </div>

          <div className="flex flex-col gap-6">
            {/* OTP Inputs */}
            <div className="flex justify-center gap-3 md:gap-4">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input key={i} ref={(el) => (inputs.current[i] = el)} onInput={(e) => handleInput(e, i)} onKeyDown={(e) => handleKeyDown(e, i)} className="flex h-14 w-12 md:h-16 md:w-14 text-center text-xl font-bold rounded-lg border-2 border-slate-200 bg-transparent focus:border-[#137fec] focus:ring-0 focus:outline-none transition-all" maxLength={1} type="text" inputMode="numeric" />
              ))}
            </div>

            {/* Resend */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-slate-500 text-sm">Didn&apos;t receive the code?</p>
              <button className="text-[#137fec] text-sm font-semibold hover:underline decoration-2 underline-offset-4" type="button">
                Resend Code
              </button>
            </div>

            {/* Verify button */}
            <div className="mt-4">
              <button className="w-full h-14 bg-[#137fec] text-white text-base font-bold rounded-xl hover:bg-[#137fec]/90 transition-all shadow-md shadow-[#137fec]/20 flex items-center justify-center gap-2 active:scale-[0.98]" type="button" onClick={() => window.location.href='/auth/reset'}>
                Verify
                <span className="material-symbols-outlined">verified_user</span>
              </button>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs">Securely powered by Qodebyte Auth Services</p>
          </div>
        </div>
      </main>

      <footer className="py-6 flex justify-center">
        <div className="flex items-center gap-4 text-slate-400">
          <span className="text-xs uppercase tracking-widest font-semibold">Privacy</span>
          <span className="size-1 bg-slate-300 rounded-full" />
          <span className="text-xs uppercase tracking-widest font-semibold">Terms</span>
          <span className="size-1 bg-slate-300 rounded-full" />
          <span className="text-xs uppercase tracking-widest font-semibold">Help</span>
        </div>
      </footer>
    </div>
  );
}