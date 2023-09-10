import "./globals.css";
import { Comic_Neue } from "next/font/google";

const inter = Comic_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-950 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
