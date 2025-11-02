import type { Metadata } from "next";
import { vazirmatn, yekan } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "آرامیس | Aramis",
  description: "پلتفرم آرامیس",
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
      className={`${vazirmatn.variable} ${yekan.variable}`}
    >
      <body className="min-h-screen bg-background font-vazirmatn antialiased">
        {children}
      </body>
    </html>
  );
}
