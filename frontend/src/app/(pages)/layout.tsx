import type { Metadata } from "next";
import { estedad, YekanBakh } from "@/lib/fonts";
import "@/styles/globals.css";
import Header from "@/common/Header/Header";


export const metadata: Metadata = {
  title: {
    template: "%s | کالای خواب آرامیس",
    default: "وارد کننده بهترین کالاهای خواب وارداتی از کشور های معتبر در سراسر جهان"
  },
  description: "وارد کننده بهترین کالاهای خواب وارداتی از کشور های معتبر در سراسر جهان",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${estedad.variable} ${YekanBakh.variable}`}
    >
      <head>
         {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <GoogleTagManager
          gtmId={`GTM-${process.env.NEXT_PUBLIC_GOOGLETAGMANAGER_ID}`}
        />
        <GoogleAnalytics
          gaId={`GTM-${process.env.NEXT_PUBLIC_GOOGLEANALYTICS_ID}`}
        /> */}
      </head>
      <body className="container flex flex-col">
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
