import React from "react";
import { Hero, Features, Layout } from "./sections/Sections";
export default function Home() {
  return (
    <main className="realtive min-h-screen w-full flex flex-col">
      <section>
        <Layout />
      </section>
    </main>
  );
}
