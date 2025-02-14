import Image from "next/image";

export default function UnetePage() {
  return (
    <div className="p-8 text-center mt-20">
      
      {/* Contenedor con posición relativa */}
      <div className="relative w-full max-w-[1000px] aspect-[2.5/1] mx-auto">
        <Image
            src="Halloween_Grupo.jpg"
            alt="Unete a Hummer Box Andratx"
            fill
            className="border-[0.5px] border-black-500 shadow-lg bg-white object-cover"
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white 
               px-2 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24 text-2xl sm:text-3xl 
               md:text-4xl lg:text-5xl font-bold leading-tight text-center">
          HU<span className="text-blue-500">MM</span>ER BOX
          <span className="block">ANDRATX</span>
        </h1>

        {/* Botón dentro de la imagen, centrado en la parte inferior */}
        <button className="btn-primary absolute bottom-4 md:bottom-6 
            left-1/2 transform -translate-x-1/2 rounded-md text-xs md:text-sm aspect-[2.5/1]">
          ¡Únete!
        </button>

      </div>
    </div>
  );
  }