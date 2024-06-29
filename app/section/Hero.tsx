import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[url('/Images/theHillspict/BeachPicts/Beach-1.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="z-10 w-full min-h-screen bg-slate-900 bg-opacity-50">
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            className="lg:text-7xl text-4xl font-extrabold text-white uppercase"
          >
            The <span className="text-sky-500">Hills</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75, ease: [0, 0.71, 0.2, 1.01] }}
            className="text-3xl font-bold text-white uppercase text-center"
          >
            Discover <span className="text-sky-500">Lombok&apos;s</span>{" "}
            Hidden Treasures with Us!
          </motion.h1>
          <p className="text-white text-center mt-1 lg:w-[40%]">
            Discover the enchanting beauty of Lombok with us. Our tours are
            designed for travelers who care about the environment and
            appreciate the rich cultural heritage of this stunning island.
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>;
};
export default Hero;
