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
  { src: "imgs/carousel1.jpg", titulo: "Cross Training", text: "<p>El <strong>Cross Training</strong> es un entrenamiento de alta intensidad que mejora fuerza, resistencia, coordinación y flexibilidad mediante movimientos naturales y ejercicios multiarticulares.</p></br><p>En <strong>Hummer Box Andratx</strong>, te ayudamos a alcanzar tu mejor versión con entrenamientos de halterofilia, gimnasia, remo indoor y carrera, adaptados a cualquier nivel. Contamos con <strong>instalaciones de primera calidad y un ambiente motivador</strong>.</p></br><p>💪 <strong>¿Listo para el reto?</strong></p>" },
  { src: "imgs/carousel2.jpg", titulo: "Titulo 2", text: "Texto para imagen 2" },
  { src: "imgs/carousel3.jpg", titulo: "Titulo 3", text: "Texto para imagen 3" },
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
              <div className="w-full sm:w-1/2 flex items-center justify-center bg-blue-50 h-auto sm:h-[500px] rounded-t-lg sm:rounded-l-lg">
                <Card className="shadow-none border-none p-6 w-full h-full flex flex-col items-center justify-center">
                  <CardContent className="border-none shadow-none text-left w-full">
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
