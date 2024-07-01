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
    <main className="relative min-h-screen flex flex-col">
      {/* <section className="w-full p-4 flex-col items-center justify-center">
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
      </section> */}
      <section className="flex flex-col justify-start items-center gap-1 px-16">
        <div className="w-1/1 grid grid-cols-5 grid-rows-6 gap-1 h-[500px]">
          <div className="col-span-3 row-span-3 rounded-md shadow-md p-2 items-center justify-center flex"
            style={{backgroundImage: `url('/Images/theHillspict/Rinjani_mountains/Rinjani-Mointain-1.jpg')`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed"}}
          ><div className="flex items-center justify-center flex-col"><h1 className="text-7xl font-bold text-sky-100 uppercase">Rinjani Mountain</h1></div></div>
          {/* <div className="col-span-2 row-span-2 col-start-4 rounded-md shadow-md p-2" style={{backgroundImage: `url('/Images/theHillspict/Rinjani_mountains/Rinjani-Mointain-2.jpg')`, backgroundSize: "cover", backgroundPosition: "center"}}>2</div>
          <div className="col-span-2 row-span-4 col-start-4 row-start-3 rounded-md shadow-md p-2"  style={{backgroundImage: `url('/Images/theHillspict/Rinjani_mountains/Rinjani-Mointain-3.jpg')`, backgroundSize: "cover", backgroundPosition: "center"}}>3</div> */}
          <div className="row-span-3 row-start-4 rounded-md shadow-md p-2"  style={{backgroundImage: `url('/Images/theHillspict/Rinjani_mountains/Rinjani-Mointain-4.jpg')`, backgroundSize: "cover", backgroundPosition: "center"}}>4</div>
          <div className="col-span-2 row-span-3 row-start-4 rounded-md shadow-md p-2"style={{backgroundImage: `url('/Images/theHillspict/Rinjani_mountains/Rinjani-Mointain-5.jpg')`, backgroundSize: "cover", backgroundPosition: "center"}}>5</div>
        </div>
      </section>
    </main>
  );
}