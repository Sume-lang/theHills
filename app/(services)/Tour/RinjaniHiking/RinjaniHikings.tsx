import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RinjaniHikings = () => {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Rinjani Hikings</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            reiciendis doloremque ab cumque voluptas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          reiciendis doloremque ab cumque voluptas.
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
};

export default RinjaniHikings;
