import React from "react";
import { CardType } from "@/sections/ArtWorkSection";
import CardUI from "./CardUI";

const CardLogic = ({
  cardData,
  slicedData,
  index,
}: {
  cardData: CardType;
  slicedData: CardType[];
  index: number;
}) => {
  const { id, type, img, title, subTitle, text } = cardData;
  
  return (
    <CardUI
      slicedData={slicedData}
      index={index}
      type={type}
      img={img}
      title={title}
      subTitle={subTitle}
      text={text}
    />
  );
};

export default CardLogic;
