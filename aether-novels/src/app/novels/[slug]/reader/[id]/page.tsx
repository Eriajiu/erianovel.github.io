"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Settings, ChevronLeft, ChevronRight, Menu, Sliders, EyeOff } from 'lucide-react';

// Giả lập dữ liệu fetch từ API
const mockChapter = {
  id: "ch_1",
  title: "Chương 1: Thức Tỉnh Giữa Tinh Không",
  novelTitle: "Kỷ Nguyên Tinh Không",
  content: `Bóng tối bao trùm lấy vạn vật, các tinh hệ đan xen vào nhau như một bức tranh khổng lồ cổ kính... \n\n Trần Phong mở mắt ra, lồng ngực phập phồng dữ dội. Hắn cảm nhận được dòng năng lượng vũ trụ đang cuộn trào trong huyết quản của mình. Đây không còn là Trái Đất nữa, hắn đã thực sự xuyên không đến Kỷ Nguyên Tinh Không sau vụ nổ hố đen định mệnh đó.\n\n Không khí xung quanh lạnh lẽo thấu xương, những khối pha lê lơ lửng phát ra thứ ánh sáng neon mờ ảo lam sắc. "Hệ thống đang khởi động..." Một giọng nói cơ khí lạnh lùng vang vọng trong tâm thức hắn.`,
  prevId: null,
  nextId: "ch_2"
};

export default function ReaderPage() {
  // Trạng thái cấu hình giao diện đọc truyện
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState('font-serif');
  const [theme, setTheme] = useState('dark'); // dark, sepia, light
  const [showSettings, setShowSettings] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Tính toán scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Tự động lưu tiến trình đọc vào localStorage
  useEffect(() => {
    localStorage.setItem(`read_progress_${mockChapter.id}`, "100");
    // Trigger View API Route
    fetch(`/api/chapters/${mockChapter.id}/view`, { method: 'POST' }).catch(() => {});
  }, []);

  const getThemeClass = () => {
    if (theme === 'dark') return 'bg-[#0f1115] text-[#e2e8f0]';
    if (theme === 'sepia') return 'bg-[#f4ecd8] text-[#5c4033]';
    return 'bg-white text-gray-900';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${getThemeClass()}`}>
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#7c5cff] origin-left z-50" style={{ scaleX }} />

      {/* Floating Header Controlled by Focus Mode */}
      <nav className={`fixed top-0 inset-x-0 h-16 glass-effect flex items-center justify-between px-6 z-40 transition-transform duration-500 ${isFocusMode ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100 flex items-center">
            <ChevronLeft className="w-4 h-4" /> Quay lại
          </Link>
          <span className="font-semibold line-clamp-1">{mockChapter.novelTitle}</span>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={() => setIsFocusMode(!isFocusMode)} className="p-2 hover:bg-white/10 rounded-full transition" title="Chế độ tập trung">
            <EyeOff className="w-5 h-5 text-[#00d4ff]" />
          </button>
          <button onClick={() => setShowSettings(!showSettings)} className="p-2 hover:bg-white/10 rounded-full transition">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Reading Core Area */}
      <main className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <h1 className="font-sans font-bold text-2xl md:text-4xl text-center mb-10 leading-tight">
          {mockChapter.title}
        </h1>

        {/* Reader Settings Drawer */}
        {showSettings && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-6 rounded-xl glass-effect space-y-4 text-white">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Cỡ chữ: {fontSize}px</span>
              <div className="flex space-x-2">
                <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="px-3 py-1 bg-white/10 rounded hover:bg-white/20">-</button>
                <button onClick={() => setFontSize(Math.min(30, fontSize + 2))} className="px-3 py-1 bg-white/10 rounded hover:bg-white/20">+</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Giao diện màu:</span>
              <div className="flex space-x-2">
                <button onClick={() => setTheme('dark')} className="w-8 h-8 rounded-full bg-[#0f1115] border border-white/20" />
                <button onClick={() => setTheme('sepia')} className="w-8 h-8 rounded-full bg-[#f4ecd8] border border-black/10" />
                <button onClick={() => setTheme('light')} className="w-8 h-8 rounded-full bg-white border border-gray-300" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Font Chữ:</span>
              <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="bg-neutral-800 text-white rounded p-1 text-sm outline-none">
                <option value="font-serif">Merriweather (Mặc định cổ điển)</option>
                <option value="font-sans">Inter (Hiện đại hình khối)</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Render Content */}
        <div 
          className={`${fontFamily} leading-relaxed tracking-wide text-justify space-y-6 selection:bg-[#7c5cff]/30`}
          style={{ fontSize: `${fontSize}px` }}
        >
          {mockChapter.content.split('\n\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 flex justify-between items-center border-t border-white/10 pt-8">
          <button disabled={!mockChapter.prevId} className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-neutral-800 text-white disabled:opacity-40 hover:bg-neutral-700 transition">
            <ChevronLeft className="w-4 h-4" /> <span>Chương trước</span>
          </button>
          <button disabled={!mockChapter.nextId} className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#7c5cff] text-white disabled:opacity-40 hover:bg-[#6a5cff] transition font-medium shadow-lg shadow-[#7c5cff]/20">
            <span>Chương sau</span> <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Focus Mode Indicator Box */}
      {isFocusMode && (
        <div className="fixed bottom-6 right-6 z-50">
          <button onClick={() => setIsFocusMode(false)} className="px-4 py-2 bg-[#7c5cff] text-white rounded-full shadow-xl text-xs font-semibold hover:scale-105 transition duration-300">
            Thoát Chế Độ Tập Trung
          </button>
        </div>
      )}
    </div>
  );
}