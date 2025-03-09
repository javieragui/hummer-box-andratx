import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"; // Íconos

export default function FooterPage() {
  return (
    <footer className="bg-primary text-white py-8 mt-auto mt-4">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        
        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="imgs/Logo.jpg"
            alt="Hummer Box Mallorca"
            width={200}
            height={150}
            className="object-contain rounded-full border-[2px] border-black-500 shadow-lg bg-white"
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h2 className="text-lg font-bold">HU<span className="text-black">MM</span>ER MALLORCA</h2>
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Calle Travessia sa Tanqueta 17, 07150, <br/> Andratx, Islas Baleares
          </p>
          {/* <Link href="/privacidad" className="flex items-center gap-2 hover:underline">
            <FileText size={18} /> Política de privacidad
          </Link>
          <Link href="/cookies" className="flex items-center gap-2 hover:underline">
            <FileText size={18} /> Política de cookies
          </Link> */}
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <p className="flex items-center gap-2">
            <Phone size={18} /> 666 80 02 63
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} /> 673 16 43 36
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> info@hummerbox.es
          </p>
          <Link href="https://facebook.com/HummerBoxmallorca" target="_blank" className="flex items-center gap-2 hover:underline">
            <Facebook size={18} /> Hummer Facebook
          </Link>
          <Link href="https://instagram.com/hummerandratx" target="_blank" className="flex items-center gap-2 hover:underline">
            <Instagram size={18} /> Hummer Instagram
          </Link>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} HUMMER ANDRATX
      </div>
    </footer>
  );
}

