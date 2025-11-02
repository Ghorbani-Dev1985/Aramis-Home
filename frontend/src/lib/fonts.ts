import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const yekan = localFont({
  src: [
    {
      path: "../assets/fonts/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});
