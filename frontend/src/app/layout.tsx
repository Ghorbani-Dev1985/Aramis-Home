import type { Metadata } from "next";
import { estedad, YekanBakh } from "@/lib/fonts";
import "@/styles/globals.css";


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
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
