import type { Metadata } from "next";
import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: "%s | Mehra Shop",
    default: "Mehra Shop",
  },
  description: "Mehra Shop Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`min-h-screen ${vazirFont.variable} font-sans`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
