"use client";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#137fec]/10 bg-white/80 backdrop-blur-md px-6 py-4 md:px-20 sticky top-0 z-50">
        <Link href="/" className="text-slate-900 text-xl font-bold tracking-tight hover:text-[#137fec] transition-colors">
          Qodebyte Academy
        </Link>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#137fec]/10 text-[#137fec] hover:bg-[#137fec]/20 transition-colors">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#137fec]/10 text-[#137fec] hover:bg-[#137fec]/20 transition-colors">
            <span className="material-symbols-outlined text-[22px]">account_circle</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-[560px] w-full bg-white rounded-xl shadow-xl shadow-[#137fec]/5 border border-[#137fec]/5 p-8 md:p-12 text-center">

          {/* Illustration */}
          <div className="relative mx-auto mb-8 w-64 h-64">
            <div className="absolute inset-0 bg-[#137fec]/10 rounded-full blur-3xl opacity-50" />
            <div className="relative w-full h-full bg-gradient-to-br from-[#137fec]/20 to-[#137fec]/5 rounded-2xl flex items-center justify-center overflow-hidden border border-[#137fec]/10">
              <div className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-[#137fec] text-8xl">rocket_launch</span>
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-[#137fec]/40 text-2xl">code</span>
                  <span className="material-symbols-outlined text-[#137fec]/60 text-2xl">database</span>
                  <span className="material-symbols-outlined text-[#137fec]/40 text-2xl">auto_awesome</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messaging */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-center gap-2 text-[#137fec] mb-2">
              <span className="material-symbols-outlined font-bold">check_circle</span>
              <span className="uppercase tracking-widest text-xs font-bold">Registration Complete</span>
            </div>
            <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight">Account Created Successfully!</h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto">
              Welcome to the future of learning. Your tech journey at Qodebyte Academy officially starts today.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <a href="https://wa.me/2349125771177" className="flex items-center justify-center gap-3 rounded-xl h-14 bg-[#137fec] text-white text-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#137fec]/25">
              <span className="material-symbols-outlined">groups</span>
              <span>Join the Community Group</span>
            </a>
            <Link href="/" className="flex items-center justify-center gap-3 rounded-xl h-14 bg-[#137fec]/10 text-[#137fec] text-lg font-bold hover:bg-[#137fec]/20 active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined">home</span>
              <span>Back to Home</span>
            </Link>
          </div>

          <p className="mt-12 text-slate-400 text-sm">
            Need help getting started?{" "}
            <a href="https://wa.me/2349125771177" className="text-[#137fec] hover:underline font-semibold">Chat with us on WhatsApp</a>
          </p>
        </div>
      </main>

      {/* Bottom gradient line */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#137fec]/30 to-transparent" />
    </div>
  );
}