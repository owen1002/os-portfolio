import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Space_Mono } from "next/font/google";

const inter = Space_Mono({
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
      <body className={`${inter.className} h-screen`}>
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
