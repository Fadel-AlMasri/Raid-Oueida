"use client";
// MyButton.tsx

import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      primary:
        "myButton bg-transparent text-neutral-50 border border-neutral-50  data-[hover=true]:!opacity-100 data-[hover=true]:border-neutral-100 data-[hover=true]:text-neutral-100 data-[pressed=true]:text-neutral-50 data-[pressed=true]:text-neutral-50 data-[pressed=true]:border-neutral-50 data-[pressed=true]:border-[3px]",
      success: "bg-success myButton",
      danger: "bg-red-500 text-white",
      secondary: "bg-indigo-400 text-white",
    },
    isDisabled: {
      true: "bg-[#c6c6c6] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "p-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
      md: " h-unit-10 text-small gap-unit-2 ",
      xl: "  h-unit-10 text-small gap-unit-4 rounded-small px-32",
      full: "px-unit-8 w-full h-unit-10 text-medium gap-unit-4 rounded-small",
      btn: "h-[48px] w-[120px]",
    },
    padding: {
      small: "px-2 py-1",
      medium: "px-[26px] py-[16px]",
      large: "px-8 py-2",
    },
    fontFamily: {
      nexa: "font-family: 'Nexa', sans-serif;",
    },
    fontWeight: {
      light: "font-weight: 100;",
    },
    fontSize: {
      small: "font-size: 18px;",
    },
    lineHeight: {
      normal: "line-height: 20px;",
    },
    letterSpacing: {
      wide: "letter-spacing: 2px;",
    },
    customStyles: {
      // Custom variant containing font-weight, font-size, line-height, and letter-spacing
      custom:
        "font-weight: 100; font-size: 18px; line-height: 20px; letter-spacing: 2px;",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    padding: "medium",
    disableAnimation: "true",
    disableRipple: "true",
  },

  compoundVariants: [
    {
      isDisabled: true,
      color: "primary",
    },
  ],
});
