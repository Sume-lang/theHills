import React from "react";
import { dataLayout } from "../section/layout";
export default function Features() {
  return (
    <main className="flex flex-col w-full max-h-screen p-4">
      <section className="flex flex-col items-center justify-center p-4">
        <h1 className="lg:text-5xl text-slate-800 font-bold uppercase">
          What We <span className="text-sky-900">Have?</span>
        </h1>
        <p className="lg:w-[40%] text-center">
          We commit to providing you with a pleasant travel experience and each
          moment you spend with friends, family, and partner will be delightful
          with us.
        </p>
      </section>
      <section className="lg:flex hidden lg:flex-row flex-col items-center justify-center">
        <div className="flex lg:flex-row flex-col gap-4">
          {dataLayout.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 w-[200px] gap-4 items-center justify-center border border-sky-900 p-2 shadow-md rounded-md cursor-pointer"
            >
              <div className="flex flex-col items-start justify-start">
                <span className="text-4xl text-sky-700">{item.icons}</span>
                <h1 className="text-sm font-bold mt-2">{item.name}</h1>
                <span className="text-md font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="lg:hidden flex flex-col items-center justify-center">
        <div className="flex flex-row shrink-0 gap-4 items-center justify-center">
          {dataLayout.map((item) => (
            <div
              className="grid grid-cols-1 w-full items-center justify-center shrink-1"
              key={item.id}
            >
              <span className="text-4xl text-sky-700">{item.icons}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
