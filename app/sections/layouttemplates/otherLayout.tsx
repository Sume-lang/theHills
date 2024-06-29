import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { dataLayout } from "../layouttemplates/layout";

export default function OtherLayout() {
  const [show, setShow] = useState(dataLayout[0]);
  const Toggle = ({ features }: { features: any }) => {
    setShow(features);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="relative w-full min-h-screen flex flex-col items-start jugust-start mt-10"
      >
        <div className="w-full flex flex-row items-center justify-center gap-4">
          {dataLayout.map((item) => (
            <div
              key={item.id}
              className={`grid grid-rows-1 lg:grid-cols-1 w-[200px] gap-4 items-center justify-center border border-slate-100 p-2 shadow-md cursor-pointer rounded-md ${
                item.id === show.id
                  ? "hover:border-sky-500 duration-500 ease-linear bg-sky-900 text-white"
                  : "border-slate-100"
              }`}
              onClick={() => Toggle({ features: item })}
            >
              <div className="flex flex-col items-start justify-start">
                <span className="text-3xl">{item.icons}</span>
                <h1 className="font-bold uppercase">{item.name}</h1>
                <h1 className="text-sm">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
        {show && (
          <motion.div
            className="w-full min-h-screen flex flex-col items-center justify-start gap-4 mt-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={show.id}
          >
            <h1 className="text-3xl font-bold uppercase">{show.title}</h1>
            <h1 className="lg:w-[50%] w-[70%] text-center">{show.desc}</h1>
          </motion.div>
        )}
      </motion.section>
    </AnimatePresence>
  );
}
