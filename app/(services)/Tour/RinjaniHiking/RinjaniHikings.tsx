import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dataRinajani } from "./dataHikings";
import Img from "next/image";

const RinjaniHikings = () => {
  return (
    <main className="flex flex-row items-center justify-center gap-2 p-2">
      {dataRinajani.map((item) => (
        <div
          className="w-[300px] h-[300px] bg-slate-100 shadow-md rounded-t-md"
          key={item.id}
        >
          <div
            className="w-[300px] h-[200px] bg-slate-100 flex items-end rounded-t-md"
            style={{
              backgroundImage: `url(${item.Img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-slate-900 w-full h-full bg-opacity-40 rounded-t-md flex flex-row items-end justify-start">
              <h1 className=" text-6xl font-bold text-slate-50 p-4">
                {item.id}
              </h1>
            </div>
          </div>
          <div className="p-2">
            <h1 className="uppercase font-bold text-xl">{item.title}</h1>
            <p>
              Start From <span className="font-bold">${item.price}</span>
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default RinjaniHikings;
