import React from "react";
import PageUI from "./pageUI";
import { playfair } from "@/public/Fonts/fonts";
import { MyButton } from "@/components/Variants/Button/MyButton";
import { MyInput } from "@/components/Variants/Input/MyInput";
import { MyTextarea } from "@/components/Variants/TextArea/MyTextarea";
import Card from "@/components/Card/CardUI";
import {
  ArtWork1,
  ArtWork2,
  ArtWork3,
  ArtWork4,
  ArtWork5,
  ArtWork6,
  ArtWork7,
  ArtWork8,
} from "@/components/assets";
const Page = () => {
  let data = [
    {
      id: 1,
      img: ArtWork1,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Oil on Canvas - 110 x 50 cm",
    },
    {
      id: 2,
      img: ArtWork2,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Material - Size",
    },
    {
      id: 3,
      img: ArtWork3,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Material - Size",
    },
    {
      id: 4,
      img: ArtWork4,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Material - Size",
    },
    {
      id: 5,
      img: ArtWork5,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Material - Size",
    },
    {
      id: 6,
      img: ArtWork6,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Material - Size",
    },
    {
      id: 7,
      img: ArtWork7,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Material - Size",
    },
    {
      id: 8,
      img: ArtWork8,
      title: "Artwork Name",
      subTitle: "Abla et Antar",
      text: "Material - Size",
    },
  ];
  return <PageUI data={data} />;
};

export default Page;
