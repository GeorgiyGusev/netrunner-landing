import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";


type Props = {
  banner: string
  title: string
  children: React.ReactNode
}

export default function SolutionsCard(props: Props) {
  return (
    <Card className="pb-4 rounded-3xl">
      <CardHeader className="overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={props.banner}
          isZoomed
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
        <h1 className="font-bold text-3xl">{props.title}</h1>
        {props.children}
      </CardBody>
    </Card>
  );
}