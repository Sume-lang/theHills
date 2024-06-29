"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RinjaniPackages } from "@/app/(services)/Tour/Tour";

export default function HomeLayout() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-900"
      >
        <RinjaniPackages />
      </motion.main>
    </AnimatePresence>
  );
}
