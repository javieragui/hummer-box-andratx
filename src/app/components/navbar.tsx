"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
              <span className="block text-text text-sm">ANDRATX</span>
            </div>
          </div>

          {/* MENÚ PRINCIPAL */}
          <div className="hidden lg:flex space-x-6">
            {[
              { path: "/", label: "BOX" },
              { path: "/entrenamientos", label: "ENTRENAMIENTOS" },
              { path: "/Horarios", label: "SOBRE NOSOTROS" },
              { path: "/unete", label: "ÚNETE" }
            ].map(({ path, label }, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }} // 🔥 Se mueve ligeramente a la derecha
                whileTap={{ x: -5 }} // 🔥 Se mueve a la izquierda al hacer clic
                transition={{ duration: 0.2 }}
              >
                <Link href={path} className={styles.navLink}>
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* LOGO SUPERPUESTO SOBRE LA LÍNEA */}
          <Link href="/" className="absolute left-36 top-1 z-[60]">
            <div className="relative h-[80px] w-[80px] lg:h-[110px] lg:w-[110px]">
              <Image
                src="imgs/Logo.jpg"
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

          {/* MENÚ MÓVIL CON TRANSICIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 w-full bg-black shadow-md flex flex-col items-center py-4 space-y-4 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {[
              { path: "/", label: "BOX" },
              { path: "/entrenamientos", label: "ENTRENAMIENTOS" },
              { path: "/Horarios", label: "SOBRE NOSOTROS" },
              { path: "/unete", label: "ÚNETE" }
            ].map(({ path, label }, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                whileTap={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={path} className={styles.navLink} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </nav>
    </>
  );
}
