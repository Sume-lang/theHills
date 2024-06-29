"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dataServices from "./dataSections";
export default function Features() {
  const [show, setShow] = useState(dataServices[0]);
  const Toggle = ({ features }: { features: any }) => {
    setShow(features);
  };
  return (
    <AnimatePresence mode="wait">
      <section className="w-full flex flex-col lg:flex-row items-start justify-start lg:items-start lg:justify-center mt-2 gap-2 p-4">
        {dataServices.map((item) => (
          <div
            key={item.id}
            className={`grid grid-rows-1 lg:grid-cols-1 w-full md:w-[200px] sm:w-[200px] shadow-md cursor-pointer rounded-md ${
              item.id === show.id
                ? "border-slate-900 border"
                : "border-slate-100"
            }`}
            onClick={() => Toggle({ features: item })}
          >
            <h1 className="p-2 font-bold text-center uppercase">
              {item.title}
            </h1>
          </div>
        ))}
      </section>
      {show && (
        <div
          className="w-full min-h-screen flex flex-col items-center justify-start gap-4 mt-10"
          key={show.id}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ x: "-90%", opacity: 0, scale: 0.5 }}
          >
            {show.packages}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
