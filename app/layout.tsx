import { ThemeProvider } from "@/components/ThemeProvider";
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
    <html lang="en" >
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider >
      </body>
    </html>
  );
}
