import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/react";

// Configurar la fuente Poppins
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-poppins',
// });

// // Configurar la fuente Raleway
// const raleway = Raleway({
//   subsets: ['latin'],
//   weight: ['400', '700'], // Puedes añadir más pesos según lo necesites
//   variable: '--font-raleway',
// });

// Configurar Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes agregar más pesos según necesites
  variable: "--font-montserrat", // Variable CSS para usar en Tailwind
});

// Agregar Inter
// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export const metadata: Metadata = {
  title: "Hummer Box - Entrenamiento funcional & Fitness",
  description: "Entrena con los mejores en Hummer Box Andratx. Entrenamiento funcional, respiración, halterofilia y mucho más",
  keywords: ["Entrenamiento", "Funcional", "Gym", "Hummer Box", "Andratx", "Mallorca"],
  openGraph: {
    title: "Hummer Box - Entrenamiento funcional & Fitness",
    description: "Únete al mejor gimnasio de la zona y alcanza tus objetivos. Entrenamiento funcional, respiración, halterofilia y mucho más",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
