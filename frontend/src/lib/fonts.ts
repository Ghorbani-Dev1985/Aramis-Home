import localFont from "next/font/local";

export const estedad = localFont({
  src: [
    {
      path: "../assets/fonts/Estedad-FD-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Estedad-FD-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Estedad-FD-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Estedad-FD-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Estedad-FD-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Estedad-FD-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  display: "swap",
});

export const YekanBakh = localFont({
  src: [
    {
      path: "../assets/fonts/YekanBakh-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakh-Heavy.woff",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-yekanBakh",
  display: "swap",
});
