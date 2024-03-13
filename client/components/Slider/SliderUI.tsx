"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "@/components/helper/Arrow";
import ArrowRight from "@/components/helper/Arrow";
import { prevSlide, nextSlide } from "../helper/helper";

const SliderUI = ({ data }: { data: object[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <>
      <div className="relative flex flex-col items-center md:flex-row md:justify-center md:items-center gap-12">
        <div
          className="hidden md:block"
          onClick={() => prevSlide(currentIndex, setCurrentIndex)}
        >
          <Arrow direction="left" currentIndex={currentIndex} />
        </div>

        <div className={`flex md:w-[887px] w-[327px] overflow-hidden`}>
          {data.map(({ url }: any, index: number) => (
            <div
              key={index}
              className={`min-w-full md:h-[502px] h-[185px] max-h-[62vh] flex flex-col`}
            >
              <div className="relative w-full h-full">
                <Image
                  fill
                  className="transition duration-1000 ease-in-out p-2"
                  style={{
                    objectFit: "cover",
                    transform: `translateX(-${100 * currentIndex}%)`,
                  }}
                  src={url}
                  alt="Barcelona Chair"
                />
              </div>
              {/* <div className="h-max pl-2">
                <p
                  className="text-white z-10"
                  style={{
                    transform: `translateX(-${100 * currentIndex}%)`,
                  }}
                >
                  {description}
                </p>
              </div> */}
            </div>
          ))}
        </div>
        <div className="flex gap-12">
          <div
            className="md:hidden"
            onClick={() => prevSlide(currentIndex, setCurrentIndex)}
          >
            <Arrow direction="left" currentIndex={currentIndex} />
          </div>
          <div
            onClick={() =>
              nextSlide(currentIndex, data.length - 1, setCurrentIndex)
            }
          >
            <ArrowRight
              direction="right"
              currentIndex={currentIndex}
              lastIndex={data.length - 1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderUI;
