import { Newspaperr } from "@/components/assets";
import React from "react";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ArtWorkSection from "@/sections/ArtWorkSection";
import ExhibitionSection from "@/sections/ExhibitionSection";
import NewspaperSection from "@/sections/NewspaperSection";
import ContactSection from "@/sections/ContactSection";
export type CardType = {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  text: string;
};

const PageUI = ({ data }: { data: CardType[] }) => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ArtWorkSection data={data} />
      <ExhibitionSection />
      <NewspaperSection />
      <ContactSection />
    </div>
  );
};

export default PageUI;
