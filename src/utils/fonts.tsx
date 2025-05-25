import { Righteous, Staatliches, Work_Sans, Jura } from "next/font/google";

export const staatliches_font = Staatliches({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export const righteous_font = Righteous({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export const worksans_font = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const jura_font = Jura({
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
  style: ["normal"],
});
