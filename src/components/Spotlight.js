"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  { title: "Student Success: Designing for the Future", description: "Follow Sarah's journey from a high school student to landing a junior UI designer role after her 3-month intensive program.", link: "Watch Interview", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd7pJ45ajJ2NKplgwzQXYRCvHTC2TVxJUASK3XAO0lXTSG8-65IFx3Jk9_A0PETukCJ-ArGVOoTMCunKxhQB5NILA1ShRftzaV50cl0kGAR2b3Nw0ajnQq_93SdPzEOJnKaxLc4UhZsLp4kOCA0DvekDmTsDZ1RcxC6Lg60pLoZs6OZSLsEZAzjCsAMMjk1BgrHjxtDlDSGYwwbX0tajeSZQPrgJ8D30UBS7HDz5JnFUm7yXaSJmSQy35JMruVcPZoIPPad3vUGOGu" },
  { title: "Instructor Insights: Why AI Matters", description: "Our lead engineering mentor explains how we integrate AI tools into every curriculum to double student productivity.", link: "Watch Now", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXGa9nUpWIKnIdXIWc8Hl0JRz8BNeKqr11hlJn1n64MASoQ11h9njs5FPT1pDEzu3Gjc1evXQ7zPfmC7ieodnV3BAxbQWYzzPXocXVnrnr_byDw6xZ8CPj0LyS9KCRCQcbDPS1H4yVn9FmUz99WwnVIagYZ3ti6Jj_y9Vkz3ZK_0cvkOmvx2DTztTxyWQiY9MCKp00yjSapueIZ75NOt4f9a0osP-T9RASV8MgtxpG82BtObfRopBku3oJeWDn16twq2qndajzU_Yw" },
  { title: "The Qodebyte Classroom Experience", description: "Get a sneak peek into our high-energy classroom sessions, peer-to-peer coding jams, and weekly project demos.", link: "Take a Peek", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALiineSal9NDStqVv_TontBUGsMO_dbJIcwbkbrmjjakHW5CGvJ3SXTxLmp_W_T3SxV2lIu5xX-MiMgLk2N2A04uS8QMfwvAqwJeh0M4mmQjusD_uhnsglnCY2iWKjWr51ih1ZFcKXyi0DhB2akgTkFU3PAyq96ZDLzNAX-9xmGlfaHte6Xe7XnAdnF5TcuHlo-IkWfYDmQIIpiGpdFoVAcqjntEn5yfYBC-3tblEYjf8bqNz3TOC8haScGhuXiNhskzHEJMs4RmEs" },
];

export default function Spotlight() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="student-building" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Student Spotlight Gallery</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Explore the vibrant community and success stories at Qodebyte Academy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, i) => (
            <div key={video.title} style={{ transitionDelay: `${i * 150}ms` }}
              className={`group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-[#137fec] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="h-2 w-full bg-gradient-to-r from-[#137fec] to-blue-600" />
              <div className="relative aspect-video overflow-hidden cursor-pointer">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 group-hover:bg-[#137fec] transition-all duration-300">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 group-hover:text-[#137fec] transition-colors duration-200">{video.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{video.description}</p>
                <a href="#" className="text-[#137fec] font-bold text-xs flex items-center gap-1 uppercase tracking-wider hover:gap-3 transition-all duration-300 no-underline">
                  {video.link} <span className="material-symbols-outlined text-sm">arrow_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={`flex justify-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#137fec] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#137fec]/30 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 no-underline">
            <span className="material-symbols-outlined">chat</span>
            👉 Chat on WhatsApp to Enroll
          </a>
        </div>
      </div>
    </section>
  );
}