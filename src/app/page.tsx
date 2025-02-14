import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Imagen Principal */}
        <Image
          src="Gym_Hummer_Entrada.jpg"
          alt="Entrada al Hummer Box Andratx"
          fill
          className="border-[0.5px] border-black-500 shadow-lg bg-white object-cover"
        />

        {/* Capa oscura encima de la imagen */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

         {/* Cuadro de fondo para el texto */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 rounded-lg px-6 py-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            HU<span className="text-blue-500">MM</span>ER BOX
            <span className="block">ANDRATX</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
