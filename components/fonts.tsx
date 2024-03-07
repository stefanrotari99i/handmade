import { Aleo, Caveat, Sanchez } from "next/font/google";

export const sanchez = Sanchez({
  weight: ["400"],
  subsets: ["latin-ext"],
});

export const aleo = Aleo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const caveat = Caveat({
  weight: ["400"],
  subsets: ["latin"],
});
