"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos del menú hamburguesa
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between relative">
          
          {/* CONTENEDOR DEL TEXTO */}
          <div className="flex items-center space-x-4">
            <div className="block text-left font-bold text-lg">
              <span className="block text-text">
                HU<span className="text-primary">MM</span>ER BOX
              </span>
              <span className="block text-text text-sm">
                ANDRATX
              </span>
            </div>
          </div>

          {/* MENÚ PRINCIPAL */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className={styles.navLink}>
              Box
            </Link>
            <Link href="/entrenamientos" className={styles.navLink}>
              Entrenamientos
            </Link>
            <Link href="/Horarios" className={styles.navLink}>
              Sobre Nosotros
            </Link>
            <Link href="/unete" className={styles.navLink}>
              Únete
            </Link>
          </div>

          {/* LOGO SUPERPUESTO SOBRE LA LÍNEA */}
          <Link href="/" className="absolute left-36 top-1 z-[60]">
            <div className="relative h-[80px] w-[80px] lg:h-[110px] lg:w-[110px]">
              <Image
                src="Logo.jpg"
                alt="Hummer Box Andratx"
                fill
                className="rounded-full border-[2px] border-black-500 shadow-lg bg-white"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            className="lg:hidden text-primary z-50 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* MENÚ MÓVIL */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-black shadow-md flex flex-col items-center py-4 space-y-4">
              <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
              <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Sobre Nosotros
              </Link>
              <Link href="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Servicios
              </Link>
              <Link href="/unete" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Únete
              </Link>
            </div>
          )}
        </div>
        {/* LÍNEA AZUL DEGRADADA */}
        {/* <div className="absolute top-[58px] w-full h-[20px] bg-gradient-to-b from-blue-400 via-blue-100 to-transparent opacity-70 z-[40]"></div> */}
      </nav>
    </>
  );
}
