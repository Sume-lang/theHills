import React from "react";
import { Hero, Features } from "./section/sections";

export default function Home() {
  return (
    <main className="realtive min-h-screen w-full flex flex-col">
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
    </main>
  );
}
