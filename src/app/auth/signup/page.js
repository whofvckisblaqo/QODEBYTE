"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7f8] flex flex-col" style={{backgroundImage: "radial-gradient(at 0% 0%, rgba(19,127,236,0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(76,115,154,0.1) 0px, transparent 50%)"}}>

      <main className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[1000px] grid md:grid-cols-2 bg-white rounded-xl shadow-2xl shadow-[#137fec]/10 overflow-hidden">

          {/* Left panel */}
          <div className="hidden md:flex flex-col justify-between p-12 text-white relative overflow-hidden" style={{background: "linear-gradient(135deg, #137fec 0%, #4c739a 100%)"}}>
            <div className="relative z-10">
              <Link href="/" className="text-2xl font-black tracking-tight hover:opacity-80 transition-opacity">
                Qodebyte Academy
              </Link>
              <h1 className="text-4xl font-black leading-tight tracking-tight mb-6 mt-8">Master the craft of modern software development.</h1>
              <p className="text-white/80 text-lg mb-8">Hands-on programs, real-world projects, and a community of high-growth engineers — right here in Enugu.</p>
              <ul className="space-y-4">
                {["Expert-led curriculum", "Interactive coding sessions", "Direct mentorship programs"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#137fec] bg-white rounded-full p-1 text-sm">check</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 pt-12">
              <p className="text-sm font-medium text-white/70 italic">&quot;The best investment I&apos;ve made for my career.&quot;</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          {/* Right panel — form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <Link href="/" className="text-xl font-black tracking-tight text-slate-900 hover:text-[#137fec] transition-colors md:hidden block mb-4">
                Qodebyte Academy
              </Link>
              <h2 className="text-2xl font-bold text-slate-900">Create your account</h2>
              <p className="text-slate-500 mt-2">Start your journey with Qodebyte Academy today.</p>
            </div>

            <div className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                  <input className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" type="text" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                  <input className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] outline-none transition-all placeholder:text-slate-400" placeholder="name@example.com" type="email" />
                </div>
              </div>

              {/* Course */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Select Course</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">school</span>
                  <select className="w-full pl-12 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] outline-none transition-all appearance-none text-slate-700">
                    <option value="" disabled>Choose a course</option>
                    <option value="fullstack">Fullstack Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="creative">Creative Design</option>
                    <option value="basic">Basic Computer Skills</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Learning Mode */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Learning Mode</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                  <select className="w-full pl-12 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] outline-none transition-all appearance-none text-slate-700">
                    <option value="" disabled>Choose learning mode</option>
                    <option value="physical">Physical (Enugu)</option>
                    <option value="online">Online</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* How did you hear */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">How did you hear about us?</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">campaign</span>
                  <select className="w-full pl-12 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] outline-none transition-all appearance-none text-slate-700">
                    <option value="" disabled>Select an option</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="referral">Referral</option>
                    <option value="flyer">Flyer/Banner</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                    <input className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] outline-none transition-all placeholder:text-slate-400" placeholder="••••••••" type={showPassword ? "text" : "password"} />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#137fec] transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Confirm Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">verified_user</span>
                    <input className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] outline-none transition-all placeholder:text-slate-400" placeholder="••••••••" type={showConfirm ? "text" : "password"} />
                    <button onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#137fec] transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">{showConfirm ? "visibility_off" : "visibility"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input className="mt-1 rounded border-slate-300 text-[#137fec]" type="checkbox" />
                  <span className="text-xs text-slate-500 leading-relaxed">
                    I agree to the <a href="#" className="text-[#137fec] hover:underline font-semibold">Terms of Service</a> and <a href="#" className="text-[#137fec] hover:underline font-semibold">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button className="w-full bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-[#137fec]/20 transition-all flex items-center justify-center gap-2 group" type="button">
                <span>Create Account</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>

              {/* Divider */}
              <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-slate-200" />
                <span className="flex-shrink mx-4 text-slate-400 text-xs font-semibold uppercase tracking-widest">Or sign up with</span>
                <div className="flex-grow border-t border-slate-200" />
              </div>

              {/* Social */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" type="button">
                  <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                  <span className="text-sm font-semibold text-slate-700">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" type="button">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span className="text-sm font-semibold text-slate-700">GitHub</span>
                </button>
              </div>

              <p className="text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-[#137fec] font-bold hover:underline">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-6 border-t border-slate-200 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 max-w-[1000px] mx-auto">
          <p>© 2025 Qodebyte Academy</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#137fec] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#137fec] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#137fec] transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}