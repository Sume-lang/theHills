import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImage,
  CardContent,
  CardFooter,
} from "@/components/comptTesting/cards";
import { sectionData } from "../sections/sectionData";

export default function Features() {
  return (
    <main className="relative flex flex-col justify-center items-start w-full min-h-screen bg-[url('/Images/theHillspict/BeachPicts/Beach-2.jpg')] bg-cover bg-center bg-no-repeat bg-slate-800">
      <section className="relative flex flex-col justify-center items-center min-h-screen w-full bg-slate-800 bg-opacity-45">
        <div>
          <h1 className="text-4xl lg:text-7xl font-extrabold uppercase text-center text-sky-50">
            Looking for <span className="text-sky-500">something?</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {sectionData.map((item) => (
            <Card key={item.id}>
              <CardImage src={item.img} alt={item.title} />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
              </CardBody>
            </Card>
          ))}
        </div>
        
      </section>

    </main>
  );
}
