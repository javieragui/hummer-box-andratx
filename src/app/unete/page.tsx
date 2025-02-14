import Image from "next/image";

export default function UnetePage() {
  return (
    <div className="text-center mt-20">
      
      {/* Imagen principal con botón */}
      <div className="relative w-full aspect-[2.5/1] mx-auto">
        <Image
          src="Halloween_Grupo.jpg"
          alt="Unete a Hummer Box Andratx"
          fill
          className="border-[0.5px] border-black-500 shadow-lg bg-white object-cover"
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/40"></div>
         {/* Cuadro de fondo para el texto */}
         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black/60 rounded-lg px-6 py-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            HU<span className="text-blue-500">MM</span>ER BOX
            <span className="block">ANDRATX</span>
          </h1>
        </div>

        {/* Botón dentro de la imagen */}
        <button className="btn-primary absolute bottom-4 md:bottom-6 
            left-1/2 transform -translate-x-1/2 rounded-md text-xs md:text-sm px-6 py-3 bg-blue-500 text-white font-bold hover:bg-blue-700 transition">
          ¡Únete!
        </button>
      </div>

      {/* Sección "Donde Encontrarnos" */}
      <div className="mt-12 px-6 lg:px-20">
        <h1 className="text-3xl font-bold text-center mb-6">Donde Encontrarnos</h1>

        {/* Contenedor con texto a la izquierda y mapa a la derecha */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          
          {/* Texto a la izquierda */}
          <div className="lg:w-1/2 text-left text-lg leading-relaxed pt-4">
            <p>
              <span className="font-bold underline">Dirección</span> 
            </p>
            <p className="ml-6">Calle Travessia sa Tanqueta 17, 07150, Andratx, Islas Baleares</p>
            <h5><span className="font-bold underline pt-2">Contacto</span></h5>
            <ul className="list-disc list-inside space-y-2 text-left pt-2">
              <li><span className="font-bold ">Teléfonos:</span> 666 80 02 63 / 673 16 43 36</li>
              <li><span className="font-bold ">Correo Electrónico:</span> info@hummerbox.es</li>
              <li><span className="font-bold ">Instagram:</span> hummerandratx</li>
              <li><span className="font-bold ">Facebook:</span> hummerandratx</li>
            </ul>
            <h5><span className="font-bold underline pt-2">Horarios</span></h5>
            <ul className="list-disc list-inside space-y-2 text-left pt-2">
              <li><span className="font-bold ">Luneas a Viernes:</span> De 6:45 a 20:30</li>
              <li><span className="font-bold ">Sábados:</span> De 9:30 a 11:30</li>
            </ul>
          </div>

          {/* Cuadro de Google Maps a la derecha */}
          <div className="lg:w-1/2 flex justify-center mb-2">
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