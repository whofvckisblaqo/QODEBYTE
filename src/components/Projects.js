"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  { title: "FinTrack Dashboard",  category: "Fullstack React App",    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-lsKKN4JgK7mSI_nrRiU45HEEZ25m0VqEDcUUELCm0YTfVNW0wd4NDnAkmXc6Hy0Y8L4VVSdScFVmyZnzX34xfMa8yUZI7-0VJOZC9PtpRLdnyr35y1qtzLui5PmYIqMpsr0jqdXrMiL5mgbbE_MpGh7HWLGRb8edH53WzQmAf0JCnSW5E4YzOem6leKIQSFymcxa7RAs-37Bc8ShW4MhlhcjsBUfsBysSQ1QlZ3sIzp1hD2M3Ge0ie2rXGn9WV1v3xF2yUHh-GY" },
  { title: "EcoFood App",         category: "UI/UX Prototype",        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALiineSal9NDStqVv_TontBUGsMO_dbJIcwbkbrmjjakHW5CGvJ3SXTxLmp_W_T3SxV2lIu5xX-MiMgLk2N2A04uS8QMfwvAqwJeh0M4mmQjusD_uhnsglnCY2iWKjWr51ih1ZFcKXyi0DhB2akgTkFU3PAyq96ZDLzNAX-9xmGlfaHte6Xe7XnAdnF5TcuHlo-IkWfYDmQIIpiGpdFoVAcqjntEn5yfYBC-3tblEYjf8bqNz3TOC8haScGhuXiNhskzHEJMs4RmEs" },
  { title: "SneakerHead Store",   category: "Frontend Development",   image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv7wkiWCnIVV20tFeIMMcCEw2nLBGCJrPvQFM23dONLe0VeGuUGdY-UFRFXbbbZTejImOqXb3f0A0_QiB_giwOPw_4O9-ZRQpleq2wvZfT7etmorAxXI8-SXCLXI7tFVMBuAemAWWzTCYisR2Apzns407BV_hJhd4tM3EI5-t_jtLXRMdqSv63CqA8YGPoFbzuq6OZdPT-zLlFIufw1EN1QKYdFMxAWNHm3Zg5n0-uSDtPB2sWRX8SohIP1FjLI5ecOfDas74v0UfU" },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-24 bg-[#101922] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Student Projects</h2>
            <p className="text-slate-400">See what our students have built after just 12 weeks.</p>
          </div>
          <a href="#" className="text-[#137fec] font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 no-underline group">
            View Portfolio
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_right_alt</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={project.title} style={{ transitionDelay: `${i * 150}ms` }}
              className={`group cursor-pointer overflow-hidden transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="h-2 w-full bg-gradient-to-r from-[#137fec] to-blue-600 rounded-t-xl" />
              <div className="rounded-b-xl overflow-hidden mb-4 aspect-[4/3] relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#137fec]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="font-bold text-lg group-hover:text-[#137fec] transition-colors duration-200">{project.title}</h4>
              <p className="text-sm text-slate-400">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}