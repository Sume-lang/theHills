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
    <main className="relative flex flex-col justify-center items-start w-full min-h-screen">
      <section className="w-full flex justify-center lg:items-end items-center p-5">
        <h1 className="text-4xl font-extrabold uppercase text-center">
          Looking for <span className="text-sky-900">something?</span>
        </h1>
      </section>
      <section className="w-full flex lg:flex-row flex-col justify-center lg:items-start items-center">
        <div className="w-full flex flex-col items-center lg:items-start justify-center lg:flex-row">
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
