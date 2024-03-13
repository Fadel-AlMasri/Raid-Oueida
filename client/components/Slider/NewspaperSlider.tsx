"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "@/components/helper/Arrow";
import ArrowRight from "@/components/helper/Arrow";
import { prevSlide, nextSlide } from "../helper/helper";

const NewspaperSlider = ({ data }: { data: object[] }) => {
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

        <div className={`flex md:w-[625px] w-[327px] overflow-hidden`}>
          {data.map(({ url, title, subTitle }: any, index: number) => (
            <div className="min-w-full">
              <div
                className="flex flex-col gap-4 justify-center items-center onPrimary "
                style={{
                  transform: `translateX(-${100 * currentIndex}%)`,
                }}
              >
                <h4 className="labelLargeLight md:titleLargeSpacedLight">
                  Newspaper
                </h4>
                <h1 className="displaySmall md:displayMedium">{title}</h1>
                <h4 className="labelLargeLight md:titleMediumLight">
                  {subTitle}
                </h4>
              </div>
              <div
                className={`relative min-w-full md:h-[842px] h-[463px]`}
                key={index}
              >
                <Image
                  fill
                  className="transition duration-1000 ease-in-out p-2"
                  style={{
                    objectFit: "contain",
                    transform: `translateX(-${100 * currentIndex}%)`,
                  }}
                  src={url}
                  alt="Barcelona Chair"
                />
              </div>
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

export default NewspaperSlider;
