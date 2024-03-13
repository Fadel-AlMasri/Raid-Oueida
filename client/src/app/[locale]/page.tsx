import React from "react";
import { dataCards } from "@/components/Data/CardsData";
import { ExhibitionData } from "@/components/Data/ExhibitionData";
import { NewspapertData } from "@/components/Data/NewspaperData";
import { categoriesData } from "@/components/Data/CategoriesData";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ArtWorkSection from "@/sections/ArtWorkSection";
import ExhibitionSection from "@/sections/ExhibitionSection";
import NewspaperSection from "@/sections/NewspaperSection";
import ContactSection from "@/sections/ContactSection";
import { useTranslations } from "next-intl";

const Page = () => {
  const artWork = useTranslations("Artwork");

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ArtWorkSection
        categoriesData={categoriesData}
        dataCards={dataCards}
        artWorkTitle={artWork("title")}
        subTitle={artWork("subTitle")}
      />
      <ExhibitionSection data={ExhibitionData} />
      <NewspaperSection data={NewspapertData} />
      <ContactSection />
    </>
  );
};

export default Page;
