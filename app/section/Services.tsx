import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  dataTour,
  dataTransportation,
  dataAccomodations,
} from "./ServicesData";
export default function Services() {
  return (
    <main className="relative min-h-screen flex flex-col lg:flex-row">
      <section className="w-full p-4 flex-col items-center justify-center">
        <div
          id="Tour"
          className="flex flex-col lg:flex-row justify-center items-center"
        >
          <h1 className="lg:text-5xl text-4xl uppercase text-sky-700 font-extrabold">
            The <span className="text-sky-900">Tour</span>
          </h1>
        </div>
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-center gap-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          {dataTour.map((tour) => (
            <Card key={tour.id}>
              <CardContent
                className=""
                style={{
                  backgroundImage: `url(${tour.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full h-full bg-slate-900 bg-opacity-30 p-2 rounded-t-sm flex justify-start items-end">
                  <h1 className="text-7xl font-bold text-sky-100">{tour.id}</h1>
                </div>
              </CardContent>
              <CardHeader>
                <h1 className="text-xl font-bold uppercase tracking-[0.1rem]">
                  {tour.title}
                </h1>
              </CardHeader>
              <CardFooter>Testing</CardFooter>
            </Card>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
