import React from "react";
import { Hero, Features, Layout } from "./sections/Sections";
import TourCard from "@/app/(services)/Tour/RinjaniHiking/RinjaniHikings";
export default function Home() {
  return (
    <main className="realtive min-h-screen w-full flex flex-col">
      <section>
        <TourCard />
      </section>
    </main>
  );
}
