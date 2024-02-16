import React from "react";
import { CardType } from "@/app/(home)/pageUI";
import CardLogic from "@/components/Card/CardLogic";
const ArtWorkSection = ({ data }: { data: CardType[] }) => {
  return (
    <div>
      <h1 className="onPrimary">Artwork</h1>
      <div className="grid grid-cols-4">
        {data.map((item, index) => {
          return <CardLogic key={index} cardData={item} />;
        })}
      </div>
    </div>
  );
};

export default ArtWorkSection;
