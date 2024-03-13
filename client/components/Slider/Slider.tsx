"use client";
import React, { useEffect, useState } from "react";
import SliderUI from "./SliderUI";

const Slider = ({ data }: { data: object[] }) => {
  return <SliderUI data={data} />;
};

export default Slider;
