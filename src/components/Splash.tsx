import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 2.5, filter: "blur(20px)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#091B44] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#091B44] via-[#091B44] to-[#0A3EA8]/30" />
        
        {/* Geometric Grid Pattern (Polygonal Squares) */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#C89B3C_1px,transparent_1px),linear-gradient(to_bottom,#C89B3C_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />

        {/* Glow effect */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-[400px] h-[400px] bg-[#C89B3C]/30 rounded-full blur-[100px]"
        />

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center gap-6"
        >
          <div className="w-32 h-32 rounded-3xl p-1 shadow-2xl shadow-[#C89B3C]/30 flex items-center justify-center bg-white/5 overflow-hidden">
            <motion.img
              src="/logo.jpg"
              alt="شعار الريان"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-4xl font-black tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Tharwat Emara Ruqaa', 'Cairo', serif" }}
            >
              الريــــان
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-sm text-[#C89B3C] font-semibold tracking-wider mt-2"
            >
              لأعمال المطابخ والدريسنج والألوميتال
            </motion.p>
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 150 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent rounded-full mt-4"
          />
        </motion.div>
      </motion.div>
  );
}
