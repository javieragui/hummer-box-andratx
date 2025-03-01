"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const imagesCarousel = [
  { src: "/imgs/carousel1.jpg", titulo: "Titulo 1", text: "Texto para imagen 1" },
  { src: "/imgs/carousel2.jpg", titulo: "Titulo 2", text: "Texto para imagen 2" },
  { src: "/imgs/carousel3.jpg", titulo: "Titulo 3", text: "Texto para imagen 3" },
];

export function CarouselBox() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      loop={true}
      className="w-full max-w-7xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imagesCarousel.map((item, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-row-reverse items-center p-4 gap-4">
              {/* Imagen a la derecha */}
              <div className="w-1/2">
                <Image
                  src={item.src}
                  alt={`Imagen ${index + 1}`}
                  width={800}
                  height={450}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>

              {/* Texto a la izquierda */}
              <div className="w-1/2 flex items-center justify-center">
                <Card className="shadow-none border-none p-6 rounded-lg h-full">
                  <CardContent className="border-none shadow-none text-center">
                    <h2 className="text-2xl font-semibold">{item.titulo}</h2>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
