import React from "react";
import { CardType } from "@/app/(home)/pageUI";
import CardUI from "./CardUI";
{
}
const CardLogic = ({ cardData }: { cardData: CardType }) => {
  const { id, img, title, subTitle, text } = cardData;
  return (
    <CardUI id={id} img={img} title={title} subTitle={subTitle} text={text} />
  );
};

export default CardLogic;
