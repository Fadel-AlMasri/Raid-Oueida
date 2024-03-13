import React from "react";
import Image from "next/image";
const HeroSliderUI = ({
  heroImages,
  currentIndex,
}: {
  heroImages: string[];
  currentIndex: number;
}) => {
  return (
    <>
      {heroImages.map((url: any, index: number) => (
        <div className="relative w-full h-full" key={index}>
          <Image
            key={index}
            fill
            className="transition duration-1000 ease-in-out px-6 md:px-0"
            style={{
              objectFit: "cover",
              transform: `translateY(-${100 * currentIndex}%)`,
            }}
            src={url}
            alt="Barcelona Chair"
          />
        </div>
      ))}
    </>
  );
};

export default HeroSliderUI;
