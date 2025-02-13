import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hummer Box - Entrenamiento funcional & Fitness",
  description: "Entrena con los mejores en Hummer Box Andratx. Entrenamiento funcional, respiración, halterofilia y mucho más",
  keywords: ["Entrenamiento", "Funcional", "Gym", "Hummer Box", "Andratx", "Mallorca"],
  openGraph: {
    title: "Hummer Box - Entrenamiento funcional & Fitness",
    description: "Únete al mejor gimnasio de la zona y alcanza tus objetivos. Entrenamiento funcional, respiración, halterofilia y mucho más",
    // images: [
    //   {
    //     url: "/og-image.jpg", // Imagen para compartir en redes
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
