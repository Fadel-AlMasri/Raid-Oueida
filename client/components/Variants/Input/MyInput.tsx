"use client";

import { extendVariants, Input } from "@nextui-org/react";

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      contact: {
        inputWrapper: [
          " font-['Nexa'] font-thin text-xl tracking-[2px] bg-neutral-200 data-[hover=true]:bg-neutral-200 group-data-[focus=true]:bg-neutral-200",
        ],
        innerWrapper: [""],
        input: ["text-white"],
      },
      stone: {
        inputWrapper: [],
        input: [
          "text-zinc-800",
          "placeholder:text-red-500",
          "dark:text-zinc-400",
          "dark:placeholder:text-zinc-600",
        ],
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
      lg: {
        inputWrapper: "h-[60px] min-h-unit-12 ",
        input: "text-medium ",
      },
      xl: {
        inputWrapper: "h-unit-14 min-h-unit-14",
        input: "text-medium",
      },
      unitSize: {
        inputWrapper: "h-unit-12 min-h-unit-12 pl-3 pr-0.5",
        input: "text-medium",
      },
      search: {
        inputWrapper: "h-unit-11 text-small gap-unit-2 rounded-small w-full",
      },
    },
    radius: {
      xs: {
        inputWrapper: "rounded",
      },
      sm: {
        inputWrapper: "rounded-[4px]",
      },
      lg: {
        inputWrapper: "",
      },
    },
    textSize: {
      base: {
        input: "text-base",
      },
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
          "bg-gray-100",
          "shadow-none",
          "transition-colors",
          "!opacity-100",
        ],
        input: [
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
          "placeholder:text-zinc-400",
          "dark:text-black",
          "dark:placeholder:text-black",
        ],
      },
    },
  },

  defaultVariants: {
    textSize: "base",
    size: "lg",
    removeLabel: true,
  },
});
