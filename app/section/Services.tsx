import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
export default function Services() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row p-4">
      <section className="w-full bg-slate-600 p-4">
        <div id="Tours">
          <h1 className="text-4xl font-extrabold uppercase text-sky-600">
            The <span className="text-sky-100">Tours</span>
          </h1>
        </div>
        <div id="Transportation"></div>
        <div id="Accomodations"></div>
      </section>
      <section className="w-1/2 bg-slate-700 bg-[url('/Images/theHillspict/BeachPicts/Beach-1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen bg-slate-900 bg-opacity-35">
          Testing
        </div>
      </section>
    </main>
  );
}
