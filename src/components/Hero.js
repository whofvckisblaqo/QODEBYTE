"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#137fec]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className={`flex flex-col gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider">
                Early Career Accelerator
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
                Build the Next Generation of Tech Creators{" "}
                <span className="text-[#137fec]">(Ages 14–20)</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                Hands-on programs in Fullstack, UI/UX, Creative Design, and Basic Computer — all integrated with AI to accelerate learning.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/auth/signup"
                className="bg-[#137fec] text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#137fec]/20 hover:scale-[1.02] hover:brightness-95 transition-all duration-300 no-underline">
                👉 Apply Now
              </a>
              <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] no-underline">
                <span className="material-symbols-outlined text-green-500">chat</span>
                👉 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right */}
          <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute -z-10 top-0 -right-20 w-96 h-96 bg-[#137fec]/30 blur-[120px] rounded-full" />
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:border-[#137fec]/50 transition-colors duration-300">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd7pJ45ajJ2NKplgwzQXYRCvHTC2TVxJUASK3XAO0lXTSG8-65IFx3Jk9_A0PETukCJ-ArGVOoTMCunKxhQB5NILA1ShRftzaV50cl0kGAR2b3Nw0ajnQq_93SdPzEOJnKaxLc4UhZsLp4kOCA0DvekDmTsDZ1RcxC6Lg60pLoZs6OZSLsEZAzjCsAMMjk1BgrHjxtDlDSGYwwbX0tajeSZQPrgJ8D30UBS7HDz5JnFUm7yXaSJmSQy35JMruVcPZoIPPad3vUGOGu"
                alt="Modern classroom with students working on laptops"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}