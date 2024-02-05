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
    <html lang="en" className="from-sky-950/95 bg-gradient-to-b to-sky-950/85">
      <body className={`${inter.className}  text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
