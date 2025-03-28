// import { BellRing, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const cardPrecios = [
  {
    title: "109 €",
    description: "/mes",
    characteristics: [
      { title: "Acceso ilimitado a las clases", description: "1 hora por clase" },
      { title: "Acceso limitado al open box", description: "" },
      // { title: "Your subscription is expiring soon!", description: "2 hours ago" },
    ],
  },
  {
    title: "99 €",
    description: "/mes",
    characteristics: [
      { title: "Acceso a 4 clases a la semana", description: "1 hora por clase" },
      { title: "Acceso a 2 open box al mes", description: "" }
    ],
  },
  {
    title: "85 €",
    description: "/mes",
    characteristics: [
      { title: "Acceso a 3 clases a la semana", description: "1 hora por clase" },
      { title: "Acceso a 2 open box al mes", description: "" }
    ],
  },
  {
    title: "75 €",
    description: "/mes",
    characteristics: [
      { title: "Acceso a 2 clases a la semana", description: "1 hora por clase" },
      { title: "Acceso a 2 open box al mes", description: "" }
    ]
  },
];

const cardRopa = [
  {
    title: "Camiseta - 20 €",
    description: "/unidad",
    image: "/imgs/carousel1.jpg", // ✅ Ruta correcta
    characteristics: [
      { title: "Camiseta deportiva", description: "Material transpirable y resistente" },
      { title: "Tallas disponibles", description: "S, M, L, XL" },
    ],
  },
  {
    title: "Camiseta - 35 €",
    description: "/unidad",
    image: "/imgs/carousel2.jpg",
    characteristics: [
      { title: "Sudadera con capucha", description: "Aislante térmico para entrenamientos" },
      { title: "Tallas disponibles", description: "S, M, L, XL" },
    ],
  },
];

const cardNutricion = [
  {
    title: "Proteínas - 30 €",
    description: "/unidad",
    image: "/imgs/carousel2.jpg",
    characteristics: [
      { title: "Proteína Whey", description: "Suplemento ideal para la recuperación muscular y desarrollo de masa magra." },
      { title: "Sabores disponibles", description: "Chocolate, Vainilla, Fresa, Cookies & Cream" },
    ],
  },
  {
    title: "Creatina - 20 €",
    description: "/unidad",
    image: "/imgs/carousel2.jpg",
    characteristics: [
      { title: "Creatina Monohidratada", description: "Mejora la fuerza y el rendimiento en entrenamientos de alta intensidad." },
      { title: "Formato", description: "500g en polvo, sin sabor" },
    ],
  },
  {
    title: "Barritas - 15 €",
    description: "/unidad",
    image: "/imgs/carousel2.jpg",
    characteristics: [
      { title: "Barritas Energéticas", description: "Snack saludable con alto contenido proteico y bajo en azúcar." },
      { title: "Sabores disponibles", description: "Chocolate, Cacahuete, Frutos Rojos" },
    ],
  },
  {
    title: "BCAA - 12 €",
    description: "/unidad",
    image: "/imgs/carousel2.jpg",
    characteristics: [
      { title: "BCAA 2:1:1", description: "Aminoácidos esenciales para reducir la fatiga muscular y mejorar la recuperación." },
      { title: "Formato", description: "250g en polvo, sabor limón" },
    ],
  },
  {
    title: "Pre-Entreno - 10 €",
    description: "/unidad",
    image: "/imgs/carousel2.jpg",
    characteristics: [
      { title: "Pre-Entreno Explosivo", description: "Aumenta la energía, concentración y resistencia durante el ejercicio." },
      { title: "Sabores disponibles", description: "Mango, Sandía, Naranja" },
    ],
  },
];


export default function PreciosPage() {
  return (
    <div className="flex flex-col items-center bg-gray-100 px-4 sm:px-4 md:px-10 lg:px-20 sm:pt-20 mb-10 w-full sm:w-auto">

      {/* Este div se muestra solo en móviles */}
      <div className="block sm:hidden relative w-full h-[120px]"></div>

      {/* Este div se muestra solo en tablets y pantallas más grandes */}
      <div className="hidden sm:block relative w-full h-[60px]"></div>
      <h2 className="text-3xl font-bold text-center w-full sm:w-3/4 py-2 shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg mb-6">
      Precios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3">
        {cardPrecios.map((card, index) => (
          <Card key={index} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transition-transform duration-300 hover:scale-105 focus-within:scale-105 shadow-md hover:shadow-xl focus-within:shadow-xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <h1 className="after:block after:w-12 after:h-[3px] after:bg-sky-500 after:mb-2 after:rounded-full"></h1>
              {/* <div className="flex items-center space-x-4 rounded-md border p-4">
                <BellRing size={20} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                </div>
                <Switch />
              </div> */}
              <div>
                {card.characteristics.map((notification, idx) => (
                  <div
                    key={idx}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full">
                <Check size={16} className="mr-2" /> Mark all as read
              </Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>

       {/* Sección de ropa */}
       <h2 className="text-3xl font-bold text-center w-full sm:w-3/4 py-2 shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg my-6">
        Colección Oficial
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cardRopa.map((card, index) => (
          <Card key={index} className="w-full max-w-sm transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl">
            <CardHeader>
              <div className="items-center">
                <Image
                  src={card.image} 
                  alt={card.title}
                  width={350} 
                  height={350} 
                  className="object-cover rounded-xl shadow-lg"
                />
                <div className="text-align-center mt-4 flex items-center space-x-2">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <h1 className="after:block after:w-12 after:h-[3px] after:bg-sky-500 after:mb-2 after:rounded-full"></h1>
              <div>
                {card.characteristics.map((item, idx) => (
                  <div key={idx} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter />
          </Card>
        ))}
      </div>

      {/* Sección de Nutrición */}
      <h2 className="text-3xl font-bold text-center w-full sm:w-3/4 py-2 shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg my-6">
        Nutrición
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cardNutricion.map((card, index) => (
          <Card key={index} className="w-full max-w-sm transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl">
            <CardHeader >
              <div className="items-center">
                <Image
                  src={card.image} 
                  alt={card.title}
                  width={350} 
                  height={350} 
                  className="object-cover rounded-xl shadow-lg"
                />
                <div className="text-align-center mt-4 flex items-center space-x-2">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <h1 className="after:block after:w-12 after:h-[3px] after:bg-sky-500 after:mb-2 after:rounded-full"></h1>
              <div>
                {card.characteristics.map((item, idx) => (
                  <div key={idx} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter />
          </Card>
        ))}
      </div>
    </div>
  );
}
