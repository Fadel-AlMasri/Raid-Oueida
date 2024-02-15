import React from "react";
import { playfair } from "@/public/Fonts/fonts";
import { MyButton } from "@/components/Variants/Button/MyButton";
import { MyInput } from "@/components/Variants/Input/MyInput";
import { MyTextarea } from "@/components/Variants/TextArea/MyTextarea";
const page = () => {
  return (
    <div>
      <div className="bg-black h-[100px] w-[150px] flex items-center justify-center ml-20">
        <MyButton color="primary" size="btn" radius="none">
          Press Me
        </MyButton>
      </div>
      <div>
        <MyInput color="contact" label="Full Name" radius="none" />
        <MyTextarea
          color="stone"
          label="Message"
          labelPlacement="inside"
          radius="none"
        />
      </div>

      <MyInput color="contact" type="email" radius="none" label="Email" />

      {/* <MyInput color="contact" radius="none" label="Full Name" /> */}
      <h1 className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        quis quasi et consectetur possimus dolores, fugit at? Veritatis esse
        nisi animi laboriosam,ccccc eum velit, pariatur molestias, illum
        dignissimos suscipit obcaecati.
      </h1>
    </div>
  );
};

export default page;
