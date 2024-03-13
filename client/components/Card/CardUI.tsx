import React, { useState } from "react";
import Image from "next/image";
import PopUp from "@/components/Popup/PopUp";
import { CardType } from "@/sections/ArtWorkSection";
import clsx from "clsx";

const CardUI = ({
  type,
  img,
  title,
  subTitle,
  text,
  index,
  slicedData,
}: {
  type: string;
  img: string;
  title: string;
  subTitle: string;
  text: string;
  index: number;
  slicedData: CardType[];
}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [indexing, setIndexing] = useState(index);

  const horizontally = type === "horizontally";
  const vertically = type === "vertically";
  const box = type === "box";

  const cardClass = {
    "md:w-[184.04px] md:h-[273.26px] w-[110.42px] h-[163.956px]": vertically,
    "md:w-[274px] md:h-[184.05px] w-[125.4px] h-[80.43px]": horizontally,
    "md:w-[185px] md:h-[185px] w-[111px] h-[111px]": box,
  };

  return (
    <div className=" text-center md:h-[420px] md:w-[354px] w-max h-max mb-10">
      <div className="flex flex-col justify-center items-center md:h-[75%] md:py-4 min-h-[206px]">
        <div className="md:p-[9px] p-[7px] bg-white">
          <div
            className="md:p-[12px] p-[5px] bg-gradient-to-b from-gray-200 via-gray-100 to-white w-full "
            style={{ boxShadow: "inset 2px 2px 7px 1px rgb(0 0 0 / 0.1)" }}
          >
            {/* <div className={clsx('relative w-[110px] h-[163px]', cardClass)}> */}

            <div className={clsx("relative ", cardClass)}>
              <Image
                src={img}
                alt="test"
                fill
                className="cursor-pointer"
                loading="lazy"
                style={{ objectFit: "cover" }}
                onClick={() => {
                  setOpenPopup(true);
                  setIndexing(index);
                }}
              />
            </div>

            {
              <PopUp
                indexing={indexing}
                setIndexing={setIndexing}
                slicedData={slicedData}
                trigger={openPopup}
                setTrigger={setOpenPopup}
              />
            }
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center pt-5 md:h-[25%] ">
        <h1 className="onPrimary labelLargeLight">{title}</h1>
        <h1 className="onPrimary labelSmallBold">{subTitle}</h1>
        <h1 className="onPrimary bodySmallLight">{text}</h1>
      </div> */}
    </div>
  );
};

export default CardUI;
