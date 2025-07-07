import React from "react";

const BackgroundDecor = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none select-none">
    {/* 大圓圈與漸層光暈 */}
    <div className="absolute top-[-12%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#1A4C7A]/20 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#3CB1B6]/20 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-[#2A7DB1]/20 to-transparent rounded-full blur-2xl"></div>
    {/* 中小圓點 */}
    <div className="absolute top-[25%] left-[60%] w-10 h-10 bg-[#3CB1B6]/30 rounded-full blur"></div>
    <div className="absolute bottom-[30%] right-[20%] w-8 h-8 bg-[#1A4C7A]/20 rounded-full blur"></div>
    <div className="absolute top-[60%] left-[15%] w-6 h-6 bg-[#2A7DB1]/30 rounded-full blur"></div>
    <div className="absolute bottom-[10%] left-[40%] w-12 h-12 bg-[#3CB1B6]/15 rounded-full blur"></div>
    {/* 幾何線條SVG */}
    <svg className="absolute top-[20%] left-[10%] w-64 h-64 opacity-30" fill="none" viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="120" stroke="#1A4C7A" strokeWidth="2" strokeDasharray="8 8" />
      <circle cx="128" cy="128" r="80" stroke="#3CB1B6" strokeWidth="1.5" strokeDasharray="4 6" />
    </svg>
    <svg className="absolute bottom-[15%] right-[15%] w-80 h-80 opacity-20" fill="none" viewBox="0 0 320 320">
      <circle cx="160" cy="160" r="150" stroke="#2A7DB1" strokeWidth="2" strokeDasharray="12 10" />
      <line x1="40" y1="40" x2="280" y2="280" stroke="#1A4C7A" strokeWidth="1.5" strokeDasharray="6 6" />
    </svg>
    {/* 斜線條 */}
    <div className="absolute top-[50%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3CB1B6]/20 to-transparent rotate-2"></div>
    <div className="absolute bottom-[20%] right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-[#1A4C7A]/10 to-transparent -rotate-3"></div>
  </div>
);

export default BackgroundDecor; 