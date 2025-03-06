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
// import { Switch } from "@/components/ui/switch";

const cards = [
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

export default function PreciosPage() {
  return (
    <div className="flex flex-col items-center justify-start w-full px-2 sm:px-4 md:px-10 lg:px-20 sm:pt-20 mb-6">

      {/* Este div se muestra solo en móviles */}
      <div className="block sm:hidden relative w-full h-[120px]"></div>

      {/* Este div se muestra solo en tablets y pantallas más grandes */}
      <div className="hidden sm:block relative w-full h-[60px]"></div>
      <h2 className="text-3xl font-bold text-center mb-6 w-3/4 py-2 shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg">
        Precios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3">
        {cards.map((card, index) => (
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
    </div>
  );
}
