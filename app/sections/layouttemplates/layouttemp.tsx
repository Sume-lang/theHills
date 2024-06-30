"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataLayout } from "../../section/layout";
import { features } from "process";
import OtherLayout from "./otherLayout";

export default function Layouttemp() {
  const [show, setShow] = useState(dataLayout[0]);
  const Toggle = ({ features }: { features: any }) => {
    setShow(features);
  };
  return (
    <main className="relative w-full flex flex-col min-h-screen">
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        id="Hero"
        className="w-full flex flex-col items-center justify-center bg-[url('/Images/theHillspict/BeachPicts/Beach-1.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="z-10 w-full min-h-screen bg-slate-900 bg-opacity-50">
          <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <h1 className="lg:text-7xl text-4xl font-extrabold text-white uppercase">
              The <span className="text-sky-500">Hills</span>
            </h1>
            <h1 className="text-3xl font-bold text-white uppercase text-center">
              Discover <span className="text-sky-500">Lombok&apos;s</span>{" "}
              Hidden Treasures with Us!
            </h1>
            <p className="text-white text-center mt-1 lg:w-[40%]">
              Discover the enchanting beauty of Lombok with us. Our tours are
              designed for travelers who care about the environment and
              appreciate the rich cultural heritage of this stunning island.
              Join us in exploring the hidden gems of Lombok while making a
              positive impact on the local community and the environment.
            </p>
            <div className="w-full lg:flex-row md:flex-row flex-col items-center justify-center gap-2 mt-5 lg:flex hidden">
              <div className="border border-slate-100 p-2 shadow-md rounded-sm lg:w-[15%] md:w-[15%]">
                <h1 className="text-xl font-bold text-white text-center">
                  Authentic Cultural Experiences
                </h1>
              </div>
              <div className="border border-slate-100  p-2 shadow-md rounded-sm lg:w-[10%] md:w-[10%]">
                <h1 className="text-xl font-bold text-white text-center">
                  Eco-friendly Adventures
                </h1>
              </div>
              <div className="border border-slate-100  p-2 shadow-md rounded-sm lg:w-[15%] md:w-[15%]">
                <h1 className="text-xl font-bold text-white text-center">
                  Support Local Communities
                </h1>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* <section className="mt-1 p-3 max-h-screen">
        <motion.div
          className="w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-4xl font-extrabold uppercase text-start text-sky-900">
            Why Travel <span className="text-sky-500">with Us?</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-full h-full lg:flex-row flex-col flex items-center justify-center gap-10 mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {dataLayout.map((features) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className={`w-full items-center justify-center border border-slate-100 p-4 shadow-md rounded-sm cursor-pointer ${
                  features.id === show.id
                    ? "hover:border-sky-500 duration-500 ease-linear"
                    : "border-slate-100"
                }`}
                key={features.id}
                onClick={() => Toggle({ features })}
              >
                <div className="lg:w-[150px] w-[250px] h-[100px] flex-col items-center justify-center">
                  <h1 className="text-sky-900 text-5xl">{features.icons}</h1>
                  <h1 className="text-xl font-bold">{features.name}</h1>
                  <h1 className="text-sm font-bold">{features.title}</h1>
                </div>
              </motion.div>
            ))}
          </div>
          {show && (
            <div className="w-full lg:w-[50%] justify-center items-center flex flex-col">
              <h1 className="text-3xl font-bold uppercase">
                Nyaman Untuk Anda
              </h1>
              <h1 className="w-[70%]">{show.desc}</h1>
            </div>
          )}
        </motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="min-h-screen p-3 flex lg:flex-row md:flex-row flex-col items-start justify-start gap-10"
      >
        <div className="w-full flex flex-col items-center justify-center">
          Testing
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center  border-slate-900 p-4 shadow-md rounded-sm bg-[url('/Images/theHillspict/BeachPicts/Beach-4.jpg')] bg-cover bg-center bg-no-repeat min-h-[500px]">
          Testing
        </div>
      </motion.section> */}
      <section>
        <OtherLayout />
      </section>
    </main>
  );
}
