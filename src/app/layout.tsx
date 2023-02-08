import "./globals.css";
import { Header } from "./Header";
import { Poppins } from "@next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["devanagari"],
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`w-full flex justify-center ${poppins.className}`}>
        <div className="flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
