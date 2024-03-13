"use client";
import React, { useState } from "react";
import CardLogic from "@/components/Card/CardLogic";
import { MyButton } from "@/components/Variants/Button/MyButton";
import clsx from "clsx";

export type CardType = {
  id: number;
  type: "vertically" | "horizontally" | "box";
  img: string;
  title: string;
  subTitle: string;
  text: string;
  category?: string;
};

const ArtWorkSection = ({
  artWorkTitle,
  subTitle,
  dataCards,
  categoriesData,
}: {
  artWorkTitle: string;
  subTitle: string;
  dataCards: CardType[];
  categoriesData: string[];
}) => {
  const [visible, setVisible] = useState(8);
  const [cat, setCat] = useState("Abla et Antar");
  const [light, setLight] = useState(0);
  console.log(cat);

  const filteredData = dataCards.filter((card) => card.category == cat);
  const slicedData = filteredData.slice(0, visible);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
  };
  return (
    <div className="w-full section md:scroll-mt-[80px] scroll-mt-[0px] pt-12" id="artwork">
      <div className="flex flex-col items-center gap-4 py-10">
        <h5 className="labelLargeLight md:titleLargeSpacedLight onPrimary">
          {artWorkTitle}
        </h5>
        <h1 className="displaySmall md:displayMedium onPrimary">{subTitle}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pb-10  items-center justify-center w-[84%] mx-auto">
        {categoriesData.map((category, index) => (
          <h5
            key={index}
            className={clsx(
              "onPrimary cursor-pointer content-end text-center",
              light === index ? "labelXLargeBold" : "labelXLargeLight"
            )}
            onClick={() => {
              setCat(category);
              setLight(index);
              setVisible(8);
            }}
          >
            {category}
          </h5>
        ))}
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap md:justify-center w-full gap-2 ">
        {slicedData.map((item, index) => {
          return (
            <div className="min-w-[22.5%] flex justify-center" key={index}>
              <CardLogic
                cardData={item}
                slicedData={filteredData}
                index={index}
              />
            </div>
          );
        })}
      </div>
      {filteredData.length > 8 && slicedData.length !== filteredData.length && (
        <div className="flex justify-center items-center pt-10">
          <MyButton onClick={showMoreItems} color="primary" radius="none">
            View More
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default ArtWorkSection;
