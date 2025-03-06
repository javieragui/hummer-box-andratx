import Image from "next/image";
import { Phone, Mail, Instagram, Facebook, Calendar, Map} from "lucide-react";

export default function UnetePage() {
  return (
    <div className="text-center mt-20">
      {/* Imagen principal con botón */}
      <div className="relative w-full aspect-[2.5/1] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] mx-auto">
        <Image
          src="imgs/Halloween_Grupo.jpg"
          alt="Unete a Hummer Box Andratx"
          fill
          className=" shadow-lg bg-white object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Cuadro de fondo para el texto */}
        {/* <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 
                        bg-black/70 rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-[50%] sm:w-auto">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight text-center">
            HU<span className="text-blue-500">MM</span>ER BOX
            <span className="block">ANDRATX</span>
          </h1>
        </div> */}

        {/* Botón dentro de la imagen */}
        {/* <button className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 
            rounded-md text-xs sm:text-sm px-6 py-3 bg-blue-500 text-white font-bold hover:bg-blue-700 transition">
          ¡Únete!
        </button> */}
      </div>

      {/* Sección "Dónde Encontrarnos" */}
      <div className="mt-12 mb-10 px-4 sm:px-8 md:px-20">
        <h1 className="text-3xl font-bold text-center mb-6">Dónde Encontrarnos</h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-blue-50 h-auto rounded-lg p-6 shadow-md">
          {/* Información de contacto */}
          <div className="lg:w-1/2 text-left text-lg leading-relaxed">
            <h2 className="font-bold underline text-xl mb-2">Dirección</h2>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 border-b pb-2">
                <Map className="text-blue-500" size={20} />
                <span>Calle Travessia sa Tanqueta 17, 07150, Andratx, Islas Baleares</span>
              </li>
            </ul>
            <h2 className="font-bold underline text-xl mt-4">Contacto</h2>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 border-b pb-2">
                <Phone className="text-blue-500" size={20} />
                <span className="font-bold">Teléfonos:</span> 666 80 02 63 <br/> 673 16 43 36
              </li>
              <li className="flex items-center gap-3 border-b pb-2">
                <Mail className="text-blue-500" size={20} />
                <span className="font-bold">Correo:</span> info@hummerbox.es
              </li>
              <li className="flex items-center gap-3 border-b pb-2">
                <Instagram className="text-blue-500" size={20} />
                <span className="font-bold">Instagram:</span> hummerandratx
              </li>
              <li className="flex items-center gap-3 border-b pb-2">
                <Facebook className="text-blue-500" size={20} />
                <span className="font-bold">Facebook:</span> hummerandratx
              </li>
            </ul>

            <h2 className="font-bold underline text-xl mt-4">Horarios</h2>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 border-b pb-2">
                <Calendar className="text-blue-500" size={20} />
                <span className="font-bold">Lunes a Viernes:</span> 6:45 - 20:30
              </li>
              <li className="flex items-center gap-3 border-b pb-2">
                <Calendar className="text-blue-500" size={20} />
                <span className="font-bold">Sábados:</span> 9:30 - 11:30
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <iframe
                title="Ubicación de Hummer Box Andratx"
                className="w-full h-full rounded-lg shadow-md border border-gray-300"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.5757870254473!2d2.4145983!3d39.573178899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129792a527f7f8af%3A0xf7e9dd3bfb3c56d7!2sCalle+Travessia+sa+Tanqueta+17%2C+07150%2C+Andratx%2C+Illes+Balears%2C+España!5e0!3m2!1ses!2ses!4v1700000000000"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
