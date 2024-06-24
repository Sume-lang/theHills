import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

export const revalidate = 0;

export async function generateStaticParams()
{

}

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
