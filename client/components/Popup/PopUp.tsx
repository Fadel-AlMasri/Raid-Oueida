import React, { useState } from "react";
import Image from "next/image";
import { MenuClose } from "@/components/icons";
import { CardType } from "@/sections/ArtWorkSection";
import { nextSlide, prevSlide } from "@/components/helper/helper";
import { ArrowLeftEnabled, ArrowRightEnabled } from "@/components/icons";
import Arrow from "../helper/Arrow";

const PopUp = ({
  indexing,
  setIndexing,
  trigger,
  setTrigger,
  slicedData,
}: {
  indexing: number;
  setIndexing: any;
  trigger: boolean;
  setTrigger: any;
  slicedData: CardType[];
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div>
      {trigger && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25 z-20 flex flex-col md:justify-center items-center pt-[20%] md:pt-0">
          <div
            className="bg-opacity-100 self-end md:mr-[20%] mr-[10%] mb-2 z-10 cursor-pointer"
            onClick={() => setTrigger(false)}
          >
            <MenuClose size={1.5} />
          </div>
          <div className="md:self-center">
            <div className="flex md:flex-row flex-col justify-center items-center md:gap-12 ">
              <div
                className="hidden md:block cursor-pointer"
                onClick={() => prevSlide(indexing, setIndexing)}
              >
                <Arrow direction="left" currentIndex={indexing} />
              </div>
              <div className="relative">
                <div
                  className="relative bg-opacity-100 md:self-center h-[50vh] w-[40vh] md:min-h-[70vh] md:w-[60vh]"
                  onMouseOver={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={slicedData[indexing].img}
                    alt="alt-image"
                    fill
                    objectFit="contain"
                  />
                </div>
                <div
                  onMouseOver={() => setIsHovered(true)}
                  className="onPrimary hidden md:block absolute top-[85%] left-[5%]"
                >
                  {/* {isHovered && (
                    <div className="flex flex-col items-start">
                      <h1 className="labelLargeLight">
                        {slicedData[indexing].title}
                      </h1>
                      <h1 className="labelSmallBold">
                        {slicedData[indexing].subTitle}
                      </h1>
                      <h1 className="bodySmallLight">
                        {slicedData[indexing].text}
                      </h1>
                    </div>
                  )} */}
                </div>
              </div>

              <div className="flex flex-col gap-1 items-center justify-center py-4 md:hidden">
                <h1 className="onPrimary labelLargeLight">
                  {slicedData[indexing].title}
                </h1>
                <h1 className="onPrimary labelSmallBold">
                  {slicedData[indexing].subTitle}
                </h1>
                <h1 className="onPrimary bodySmallLight">
                  {slicedData[indexing].text}
                </h1>
              </div>

              <div className="flex gap-12 max-h-[20vh] mt-4">
                <div
                  className="md:hidden cursor-pointer"
                  onClick={() => prevSlide(indexing, setIndexing)}
                >
                  <Arrow direction="left" currentIndex={indexing} />
                </div>
                <div
                  onClick={() =>
                    nextSlide(indexing, slicedData.length - 1, setIndexing)
                  }
                >
                  <Arrow
                    direction="right"
                    currentIndex={indexing}
                    lastIndex={slicedData.length - 1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
