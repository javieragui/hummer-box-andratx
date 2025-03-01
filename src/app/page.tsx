import Image from "next/image";
import { FaDumbbell } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="text-center">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Imagen Principal */}
        <Image
          src="imgs/Gym_Hummer_Entrada.jpg"
          alt="Entrada al Hummer Box Andratx"
          fill
          className="border-[0.5px] border-black-500 shadow-lg bg-white object-cover"
        />

        {/* Capa oscura encima de la imagen */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

         {/* Cuadro de fondo para el texto */}
        {/* Cuadro de fondo para el texto */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 
                        bg-black/70 rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-[50%] sm:w-auto">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight text-center">
            HU<span className="text-blue-500">MM</span>ER BOX
            <span className="block">ANDRATX</span>
          </h1>
        </div>
      </div>
      {/* Después del navbar */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Box de Cross Training en Mallorca
        </h1>
        <h5 className="text-xl sm:text-1xl md:text-2xls text-center">(entrenamiento funcional y preparación física)</h5>
        <FaDumbbell color="#1d7abf" size={30} className="mt-2" />
      </div>
    </div>
  );
}
