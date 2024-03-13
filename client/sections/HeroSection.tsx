import React from "react";
import Image from "next/image";
import { heroImages } from "@/components/Data/HeroImages";
import { MyButton } from "@/components/Variants/Button/MyButton";
import HeroSliderLogic from "@/components/Slider/HeroSliderLogic";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <div
      id="hero"
      className="section flex md:flex-row flex-col pt-[80px] h-screen"
    >
      <div className="md:w-3/4 flex md:items-center justify-center md:justify-start  pt-12 md:pt-0 ">
        <div className="flex flex-col justify-center items-center md:items-start md:pl-16">
          <h1 className="md:displayMedium displaySmall onPrimary ">
            {t("title")}
          </h1>
          <p className="md:titleMediumLight labelLargeLight onPrimary md:w-[70%] w-full text-center md:text-start pt-4">
            {t("description")}
          </p>
          <div className="my-8 md:my-4">
            <MyButton color="primary" radius="none">
              <a href="#artwork">{t("button")}</a>
            </MyButton>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 relative h-full overflow-hidden">
        <HeroSliderLogic heroImages={heroImages} />
      </div>
    </div>
  );
};

export default HeroSection;
