import { ThemeOption } from "./types";

export const THEME_OPTIONS: ThemeOption[] = [
  {
    light: {
      hex: "#7d00fa",
      class: "violet-light",
    },
    dark: {
      hex: "#42008a",
      class: "violet-dark",
    },
    name: "violet",
  },
  {
    light: {
      hex: "#c00100",
      class: "red-light",
    },
    dark: {
      hex: "#690100",
      class: "red-dark",
    },
    name: "red",
  },
  {
    light: {
      hex: "#026e00",
      class: "green-light",
    },
    dark: {
      hex: "#013a00",
      class: "green-dark",
    },
    name: "green",
  },
  {
    light: {
      hex: "#343dff",
      class: "blue-light",
    },
    dark: {
      hex: "#0001ac",
      class: "blue-dark",
    },
    name: "blue",
  },
  {
    light: {
      hex: "#626200",
      class: "yellow-light",
    },
    dark: {
      hex: "#323200",
      class: "yellow-dark",
    },
    name: "yellow",
  },
  {
    light: {
      hex: "#006a6a",
      class: "cyan-light",
    },
    dark: {
      hex: "#003737",
      class: "cyan-dark",
    },
    name: "cyan",
  },
  {
    light: {
      hex: "#a900a9",
      class: "magenta-light",
    },
    dark: {
      hex: "#5b005b",
      class: "magenta-dark",
    },
    name: "magenta",
  },
  {
    light: {
      hex: "#964900",
      class: "orange-light",
    },
    dark: {
      hex: "#502400",
      class: "orange-dark",
    },
    name: "orange",
  },
  {
    light: {
      hex: "#326b00",
      class: "chartreuse-light",
    },
    dark: {
      hex: "#173800",
      class: "chartreuse-dark",
    },
    name: "chartreuse",
  },
  {
    light: {
      hex: "#005cbb",
      class: "azure-light",
    },
    dark: {
      hex: "#002f65",
      class: "azure-dark",
    },
    name: "azure",
  },
  {
    light: {
      hex: "#ba005c",
      class: "rose-light",
    },
    dark: {
      hex: "#65002f",
      class: "rose-dark",
    },
    name: "rose",
  },
];

export const THEME_CLASSES = THEME_OPTIONS.flatMap((option) => [option.light.class, option.dark.class]);
