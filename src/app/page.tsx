import Image from "next/image";
import { FaDumbbell } from "react-icons/fa";
import { CarouselBox } from "@/app/components/carouselBox";

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

        {/* Cuadro de fondo para el texto */}
        {/* <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 
                        bg-black/70 rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-[50%] sm:w-auto">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight text-center">
            HU<span className="text-blue-500">MM</span>ER BOX
            <span className="block">ANDRATX</span>
          </h1>
        </div> */}
      </div>

      {/* Sección después de la imagen */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Box de Cross Training en Mallorca
        </h1>
        <h5 className="text-xl sm:text-1xl md:text-2xls text-center">
          (entrenamiento funcional y preparación física)
        </h5>
        <FaDumbbell color="#1d7abf" size={30} className="mt-2" />
      </div>

      {/* Carrusel */}
      <div className="flex flex-col items-center justify-center mt-8 mb-8">
        <CarouselBox />
      </div>

      {/* Último apartado texto */}
      <div className="text-left items-left m-20">
        <h1 className="relative text-xl sm:text-2xl md:text-3xl font-bold after:block after:w-12 after:h-[3px] after:bg-blue-500 after:mt-2 after:rounded-full">
          Filosofía de nuestro centro de entrenamiento funcional
        </h1><br/>
        <p>En nuestro centro de Cross Training en Mallorca, ofrecemos un sistema de ejercicio del que estamos orgullosos. Nuestra filosofía en la práctica del Cross Training es enseñar los ejercicios, de la mejor manera que sabemos y que el alumno los integre, de tal manera que él mismo sea capaz de corregirse, entonces se entrenará de manera segura y productiva. Ya que nuestro objetivo es que la técnica no falle, podemos enseñar nuestros métodos a todo tipo de personas con cualquier condición física y edad y cuya única diferencia entre ellos resida en la intensidad en los ejercicios (pesos, alturas, distancias, etc). En nuestro box Cross Training , trabajamos con adultos, jóvenes, gente mayor, deportistas, competidores y en general con cualquiera que quiera introducir una mejora en su vida, adaptándonos al nivel de cada uno. Para ello en las primeras sesiones en el gimnasio de Cross Training , nos centramos en mostrarle al alumno la técnica necesaria para que pueda realizar los ejercicios de acuerdo a su nivel, evitando así riesgos de lesiones.</p>
        <br/>
        <p>Nuestro objetivo es encauzarle y acompañarle siempre en su camino para conseguir una buena forma física que pueda utilizar en la práctica de cualquier otro deporte haciendo que se sienta a gusto con su entrenamiento personal en el Cross Training box durante todo el proceso, mediante ejercicios variados, entrenamientos amenos y un buen trato personalizado.</p>
      </div>
    </div>
  );
}
