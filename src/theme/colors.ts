import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#29aa69",
  primaryBright: "#29aa69",
  primaryDark: "#29aa69",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#0f193b",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#3e3718",
  background: "#10242b",
  backgroundDisabled: "#333a3e",
  contrast: "#FFFFFF",
  invertedContrast: "#122371",
  input: "#122371",
  primaryDark: "##0d0e0e",
  tertiary: "#1f2f67",
  text: "#ecd098",
  textDisabled: "#666171",
  textSubtle: "#ddd1c1",
  borderColor: "#847a35",
  card: "#203b9ab3",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

