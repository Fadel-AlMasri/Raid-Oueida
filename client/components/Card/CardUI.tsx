import React from "react";
import { ArtWork1 } from "@/components/assets";
import Image from "next/image";
import { CardType } from "@/app/(home)/pageUI";

const CardType = {};

const Card = ({ img, title, subTitle, text }: CardType) => {
  return (
    <div className="text-center">
      <div className="p-1 bg-red-600 inline-block">
        <Image
          src={img}
          alt="test"
          className="border-4 border-yellow-600"
          width={127}
          height={123}
          objectFit="cover"
        />
      </div>
      <h1 className="onPrimary labelLargeLight">{title}</h1>
      <h1 className="onPrimary labelSmallBold">{subTitle}</h1>
      <h1 className="onPrimary bodySmallLight">{text}</h1>
    </div>
  );
};

export default Card;
