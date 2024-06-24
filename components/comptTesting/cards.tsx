"use client";
import Img from "next/image";
import React, { Children, useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { rotateY: 0, scale: 0.9, zIndex: 1 },
  hover: { scale: 1, zIndex: 10 },
};

function Card({ children }: any) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = window.innerWidth < 640;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className={`w-[350px] h-auto bg-slate-400 relative rounded-lg transition-all duration-500 shadow-lg box-content ${
        isMobile ? "" : "transition-all"
      }`}
      variants={cardVariants}
      initial={"initial"}
      animate={isFlipped ? "fliped" : "initial"}
      whileHover="hover"
      onClick={handleClick}
      style={{ y: scrollY }}>
      {children}
    </motion.div>
  );
}
function CardBody({ children }: any) {
  return <div className="px-2 py-2">{children}</div>;
}
function CardTitle({ children }: any) {
  return (
    <h3 className="text-4xl text-sky-900 font-bold mb-2 uppercase">
      {children}
    </h3>
  );
}
function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[200px] w-full">
      <Img src={src} alt={alt} fill className="object-cover rounded-t-lg" />
    </div>
  );
}
function CardContent({ children }: any) {
  return <p className="text-lg">{children}</p>;
}
function CardFooter({ children }: any) {
  return (
    <div className="flex justify-between items-center pt-2">{children}</div>
  );
}

export { Card, CardBody, CardTitle, CardImage, CardContent, CardFooter };
