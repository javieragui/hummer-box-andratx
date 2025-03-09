"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imagesCarousel = [
  { src: "/imgs/carousel1.jpg", titulo: "Cross Training", text: "<p>El <strong>Cross Training</strong> es un entrenamiento de alta intensidad que mejora fuerza, resistencia, coordinación y flexibilidad mediante movimientos naturales y ejercicios multiarticulares.</p></br><p>En <strong>Hummer Andratx</strong>, te ayudamos a alcanzar tu mejor versión con entrenamientos de halterofilia, gimnasia, remo indoor y carrera, adaptados a cualquier nivel. Contamos con <strong>instalaciones de primera calidad y un ambiente motivador</strong>.</p></br><p>💪 <strong>¿Listo para el reto?</strong></p>" },
  { src: "/imgs/carousel2.jpg", titulo: "Técnica y Perfección 🎯",
    text: `<p>No se trata solo de levantar más peso o hacer más repeticiones. La <strong>técnica</strong> es la clave para mejorar sin lesiones y alcanzar tu máximo rendimiento.</p></br>
    <p>En <strong>Hummer Andratx</strong>, nos enfocamos en la ejecución correcta de cada movimiento, desde los <strong>levantamientos olímpicos</strong> hasta la <strong>gimnasia deportiva</strong>. Con la guía de nuestros coaches, mejorarás tu precisión y eficiencia en cada ejercicio.</p></br>
    <p>🔍 <strong>La clave del progreso está en los detalles. Entrena con inteligencia, no solo con intensidad.</strong></p>`
  },
  { src: "/imgs/carousel3.jpg", titulo: "Material del Box 🏋️‍♂️", text: `<p>En <strong>Hummer Andratx</strong>, contamos con <strong>equipamiento de primera calidad</strong> para que saques el máximo provecho a cada entrenamiento.</p></br>
    <p>Desde <strong>pesas olímpicas</strong> y <strong>kettlebells</strong>, hasta <strong>anillas, cuerdas, assault bikes, remos indoor y SkiErgs</strong>. Todo lo que necesitas para mejorar tu fuerza, resistencia y técnica en un mismo lugar.</p></br>
    <p>🔥 <strong>El material no hace al atleta… pero ayuda a que des lo mejor de ti.</strong></p>` },
];

export function CarouselBox() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-7xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imagesCarousel.map((item, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col-reverse sm:flex-row-reverse items-center p-2">
              {/* Imagen (Debajo en móviles, derecha en pantallas grandes) */}
              <div className="w-full sm:w-1/2">
                <Image
                  src={item.src}
                  alt={`Imagen ${index + 1}`}
                  width={800}
                  height={450}
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-b-lg sm:rounded-r-lg"
                />
              </div>

              {/* Texto (Arriba en móviles, izquierda en pantallas grandes) */}
              <div className="w-full sm:w-1/2 flex items-center justify-center bg-blue-100 h-auto sm:h-[500px] rounded-t-lg sm:rounded-l-lg">
                <Card className="shadow-none border-none w-full h-full flex flex-col items-center justify-center">
                  <CardContent className="border-none shadow-none text-left w-full">
                    {isMobile ? <br/> : null}
                    <h2 className="text-2xl font-semibold">{item.titulo}</h2><br/>
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Ocultar botones en móviles */}
      {!isMobile && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
