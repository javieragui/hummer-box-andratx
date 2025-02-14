"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos del menú hamburguesa
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  border-black-500 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between relative">
        
        {/* CONTENEDOR DEL TEXTO */}
        <div className="flex items-center space-x-4">
          <div className="block text-left font-bold text-lg">
            <span className="block">
              HU<span className="text-primary">MM</span>ER BOX
            </span>
            <span className="block text-gray-600 text-sm">
              ANDRATX
            </span>
          </div>
        </div>

        {/* MENÚ PRINCIPAL */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className={styles.navLink}>
            Entrenamientos
          </Link>
          <Link href="/Horarios" className={styles.navLink}>
            Sobre Nosotros
          </Link>
          {/* <Link href="/services" className={styles.navLink}>
            Servicios
          </Link> */}
          <Link href="unete" className={styles.navLink}>
            Únete
          </Link>
        </div>

        {/* LOGO A LA DERECHA SUPERPUESTO SOBRE LA LÍNEA */}
        <Link href="/" className="absolute left-20 top-8 z-[9999]">
          <div className="relative h-[80px] w-[80px] lg:h-[110px] lg:w-[110px]">
            <Image
              src="Logo.jpg"
              alt="Hummer Box Andratx"
              fill
              className="rounded-full border-[1px] border-black-500 shadow-lg bg-white"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="lg:hidden text-gray-800 z-50 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MENÚ MÓVIL */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4">
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
    </nav>
  );
}
