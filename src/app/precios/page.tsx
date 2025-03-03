import { BellRing, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

// 📌 Definimos un array con la información de cada card
const cards = [
  {
    title: "Notifications",
    description: "You have 3 unread messages.",
    notifications: [
      { title: "Your call has been confirmed.", description: "1 hour ago" },
      { title: "You have a new message!", description: "1 hour ago" },
      { title: "Your subscription is expiring soon!", description: "2 hours ago" },
    ],
  },
  {
    title: "Offers",
    description: "Check out the latest promotions.",
    notifications: [
      { title: "50% off on premium plan!", description: "Just now" },
      { title: "New deals available!", description: "2 hours ago" },
    ],
  },
  {
    title: "Reminders",
    description: "Upcoming events and tasks.",
    notifications: [
      { title: "Meeting with client", description: "Tomorrow at 10 AM" },
      { title: "Project deadline approaching", description: "3 days left" },
    ],
  },
  {
    title: "Updates",
    description: "Latest changes to your account.",
    notifications: [
      { title: "Profile updated successfully", description: "5 minutes ago" },
      { title: "Security settings changed", description: "30 minutes ago" },
    ],
  },
];

export default function PreciosPage() {
  return (
    <div className="flex flex-col items-center justify-start w-full px-2 sm:px-4 md:px-10 lg:px-20 sm:pt-20 mb-6">

        {/* Este div se muestra solo en móviles */}
        <div className="block sm:hidden relative w-full h-[120px]"></div>

        {/* Este div se muestra solo en tablets y pantallas más grandes */}
        <div className="hidden sm:block relative w-full h-[60px]"></div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <Card key={index} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <BellRing size={20} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                </div>
                <Switch />
              </div>
              <div>
                {card.notifications.map((notification, idx) => (
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
              <Button className="w-full">
                <Check size={16} className="mr-2" /> Mark all as read
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
