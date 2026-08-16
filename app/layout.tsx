import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owen Siu | Software Engineer",
  description:
    "Portfolio of Owen Siu - A Software Engineer specializing in TypeScript, React, and full-stack development.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Owen Siu" }],
  openGraph: {
    title: "Owen Siu | Software Engineer",
    description:
      "Portfolio of Owen Siu - A Software Engineer specializing in TypeScript, React, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${plexSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
