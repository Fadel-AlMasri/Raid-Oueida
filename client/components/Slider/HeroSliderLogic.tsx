"use client";
import React, { useEffect, useState } from "react";
import HeroSliderUI from "./HeroSliderUI";
const HeroSliderLogic = ({ heroImages }: { heroImages: string[] }) => {
  const [timer, setTimer] = useState<number>(5000);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const nextSlide = () => {
    const isLastIndex = currentIndex == heroImages.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setTimer(5000);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, timer);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return <HeroSliderUI heroImages={heroImages} currentIndex={currentIndex} />;
};

export default HeroSliderLogic;
