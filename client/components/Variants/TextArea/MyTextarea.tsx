"use client";

// MyInput.tsx
import { extendVariants, Textarea } from "@nextui-org/react";

export const MyTextarea = extendVariants(Textarea, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        // <- add a new color variant
        base: ["justify-start h-full "],
        label: [""],
        inputWrapper: [
          "font-['Nexa'] font-thin text-xl tracking-[2px] bg-neutral-200 data-[hover=true]:bg-neutral-200 group-data-[focus=true]:bg-neutral-200",
        ],
        input: [
          "text-white",
          // <- Input element slot'
        ],
        description: [],
        errorMessage: [],
      },
    },
    size: {
      xs: {
        inputWrapper: "h-unit-6 min-h-unit-6 px-1",
        input: "text-tiny",
      },
      md: {
        inputWrapper: "h-unit-10 min-h-unit-10",
        input: "text-small",
      },
      xl: {
        inputWrapper: "h-unit-14 min-h-unit-14",
        input: "text-medium",
      },
    },
    radius: {
      xs: {
        inputWrapper: "rounded",
      },
      sm: {
        inputWrapper: "rounded-[4px]",
      },
    },
    textSize: {
      base: {
        input: "text-base",
      },
    },
    removeLabel: {
      true: {
        label: "hidden",
      },
      false: {},
    },
    isDisabled: {
      true: {
        inputWrapper: [""],
      },
    },
    isReadOnly: {
      true: {
        base: ["opacity-100"],
        inputWrapper: [
          // 'bg-gray-200',
          // 'border',
          // 'shadow-none',
          // 'transition-colors',
          // 'opacity-100',
          "bg-gray-100",
          "shadow-none",
          "transition-colors",
          "!opacity-100",
        ],
        input: [
          // 'text-black',
          // 'placeholder:text-black',
          // 'dark:text-black',
          // 'dark:placeholder:text-black',
          "text-black",
          "placeholder:text-black",

          "dark:text-black",
          "dark:placeholder:text-black",
        ],
      },
      false: {
        inputWrapper: [
          "bg-white",
          "shadow-none",
          "transition-colors",
          "opacity-100",
        ],
        input: [
          "text-black",
          "placeholder:text-gray-400",
          "dark:text-black",
          "dark:placeholder:text-black",
        ],
      },
    },
  },
  defaultVariants: {
    color: "stone",
    textSize: "base",
    size: "lg",
  },
});
