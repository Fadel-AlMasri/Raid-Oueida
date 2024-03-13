"use client";
import React, { useState } from "react";
import { MyInput } from "@/components/Variants/Input/MyInput";
import { MyTextarea } from "@/components/Variants/TextArea/MyTextarea";
import { MyButton } from "@/components/Variants/Button/MyButton";
const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("message", message);
  };

  return (
    <div
      className="h-screen section scroll-mt-[50px]
      flex flex-col justify-center mt-10"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="onPrimary md:displayMedium displaySmall">Contact</h1>
        <h5 className="onPrimary md:titleMediumLight labelLargeLight">
          Add Description
        </h5>
      </div>
      <div className="md:w-[887px] md:mx-auto mt-10 mx-6 ">
        <div className="flex md:flex-row flex-col gap-4">
          <MyInput
            color="contact"
            radius="none"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <MyInput
            color="contact"
            radius="none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4 h-[200px]">
          <MyTextarea
            color="stone"
            minRows={7}
            radius="none"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mt-4 w-max">
          <MyButton color="primary" radius="none" onPress={handleSubmit}>
            Send
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
