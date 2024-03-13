import React from "react";
import { Call, SocialFacebook, SocialInstagram } from "@/components/icons";
const Footer = () => {
  return (
    <div className="fillPrimary flex flex-col items-center gap-2 py-10">
      <p className="onPrimary md:titleMedium labelLargeLight">Add@email.com</p>
      <p className="onPrimary md:titleMedium labelLargeLight pt-2 pb-4">
        +961 123456
      </p>
      <div className="flex items-center justify-center gap-14">
        <div className="bg-white rounded-full md:p-1 p-0">
          <Call />
        </div>
        <div>
          <div className="bg-white rounded-full md:p-1 p-0">
            <SocialFacebook />
          </div>
        </div>

        <div className="bg-white rounded-full md:p-1 p-0">
          <SocialInstagram />
        </div>
      </div>
      <p className="onPrimary md:labelLargeLight bodyMediumLight py-2 text-center">
        © 2024 All Rights Reserved. Riad Oueida.
      </p>
    </div>
  );
};

export default Footer;
