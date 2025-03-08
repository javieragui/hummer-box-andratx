import Image from "next/image";

export default function EntrenamientosPage() {
  return (
    <div className="flex flex-col items-center bg-gray-100 sm:mx-6 md:mx-12 lg:mx-24 sm:pt-20 mb-20 w-full sm:w-auto">

      {/* Espaciado inicial en móviles y tablets */}
      <div className="block sm:hidden relative w-full h-[120px]"></div>
      <div className="hidden sm:block relative w-full h-[60px]"></div>

      {/* Título principal */}
      <h2 className="text-4xl font-bold text-center mb-12 w-full sm:w-3/4 py-3 shadow-lg bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-xl">
        Entrenamientos
      </h2>

      {/* Sección: TABATA */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full mb-12">
        <div className="w-full sm:w-1/2 flex justify-center px-4 sm:px-0">
          <Image 
            src="imgs/carousel1.jpg" 
            alt="Tabata img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 px-6 space-y-4">
        <br/>
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            TABATA ⚡🔥
          </h1>
          <p>Si creías que ya habías terminado el WOD… ¡sorpresa! <strong>Tabata</strong> es el famoso “after party” del entrenamiento...</p>
          <p>⏳ <strong>¿Cómo funciona?</strong> 4 minutos, 8 rondas, pura intensidad:</p>
          <ul className="list-disc pl-5">
            <li>🔥 20 segundos a fuego máximo</li>
            <li>🛑 10 segundos de descanso</li>
          </ul>
          <p>Suena fácil, ¿verdad? <strong>Error</strong>. Aquí no hay espacio para la pereza, ¡así que deja todo en cada ronda! 🚀💥</p>
        </div>
      </div>

      {/* Sección: AMRAP */}
      <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start w-full mb-12">
        <div className="w-full sm:w-1/2 flex justify-center px-4 sm:px-0">
          <Image 
            src="imgs/carousel1.jpg" 
            alt="AMRAP img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 px-6 space-y-4">
        <br/>
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            AMRAP ⏳🔥
          </h1>
          <p><strong>AMRAP</strong> significa <strong>&quot;As Many Reps/Rounds As Possible&quot;</strong>. El objetivo es simple: hacer el máximo número de rondas o repeticiones en un tiempo determinado.</p>
          <p>💡 <strong>Ejemplo:</strong> Un <strong>AMRAP de 12 minutos</strong> con:</p>
          <ul className="list-disc pl-5">
            <li>🏋️ 10 dominadas</li>
            <li>💪 10 flexiones</li>
            <li>🏃 10 sentadillas</li>
          </ul>
          <p>¿Preparado para desafiarte? ¡Dale fuerte y sin parar! 🚀🔥</p>
        </div>
      </div>

      {/* Sección: EMOM */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full mb-12">
        <div className="w-full sm:w-1/2 flex justify-center px-4 sm:px-0">
          <Image 
            src="imgs/carousel1.jpg" 
            alt="EMOM img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 px-6 space-y-4">
        <br/>
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            EMOM ⏳🔥
          </h1>
          <p><strong>EMOM</strong> significa <strong>&quot;Every Minute On the Minute&quot;</strong>. Tienes un minuto para completar una serie de ejercicios y usar el tiempo restante para descansar… hasta que empiece el siguiente minuto. 🚀</p>
          <p>💡 <strong>Ejemplo:</strong> En cada minuto, haces:</p>
          <ul className="list-disc pl-5">
            <li>🏋️ 2 cargadas con barra (40 kg)</li>
            <li>🦵 2 saltos al cajón</li>
          </ul>
          <p>Al principio, tendrás tiempo de descanso, pero conforme avanzan los minutos, el trabajo se acumula y el descanso se reduce. ¡Aguanta hasta el final! 💪🔥</p>
        </div>
      </div>

      {/* Sección: MURPH */}
      <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start w-full mb-12">
        <div className="w-full sm:w-1/2 flex justify-center px-4 sm:px-0">
          <Image 
            src="imgs/carousel1.jpg" 
            alt="Murph img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 px-6 space-y-4">
        <br/>
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            MURPH 💥
          </h1>
          <p>El WOD Murph es un brutal homenaje al teniente de la marina Michael Murphy. Su entrenamiento favorito, <strong>&quot;Body Armor&quot;</strong>, se convirtió en uno de los <strong>Hero WODs</strong> más temidos de CrossFit.</p>
          <p>💪 <strong>¿En qué consiste? Prepárate:</strong></p>
          <ul className="list-disc pl-5">
            <li>🏃‍♂️ 1 milla (1.600 m) de carrera </li>
            <li>🔥 100 dominadas</li>
            <li>🔥 200 flexiones </li>
            <li>🔥 300 sentadillas al aire </li>
            <li>🏃‍♂️ Otra milla (1.600 m) de carrera </li>
          </ul>
          <p>Como si no fuera suficiente, <strong>la versión RX se hace con un chaleco lastrado de 9 kg</strong>. ¿Te atreves? 🚀🔥</p>
        </div>
      </div>
      {/* Sección: HALTEROFILIA */}
      <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start w-full mb-12">
        <div className="w-full sm:w-1/2 px-6 space-y-4">
        <br />
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            HALTEROFILIA 🏋️‍♂️🔥
          </h1>
          <p>
            La halterofilia no es solo levantar peso, es una disciplina de fuerza, velocidad y técnica. En CrossFit, los levantamientos olímpicos 
            como el <strong>&quot;Snatch&quot;</strong> y el <strong>&quot;Clean & Jerk&quot;</strong> son fundamentales para mejorar tu rendimiento y explosividad.
          </p>
          <p>💪 <strong>¿En qué consiste? Prepárate:</strong></p>
          <ul className="list-disc pl-5">
            <li>🏋️‍♂️ <strong>Snatch (Arrancada)</strong>: Levantar la barra del suelo hasta sobre la cabeza en un solo movimiento.</li>
            <li>🔥 <strong>Clean & Jerk (Dos tiempos)</strong>: Subir la barra a los hombros y luego impulsarla por encima de la cabeza.</li>
            <li>💥 <strong>Front Squat</strong>: Fortalece piernas y core, clave para el clean.</li>
            <li>⚡ <strong>Deadlift</strong>: Construye fuerza en toda la cadena posterior.</li>
          </ul>
          <p>
            La halterofilia no solo mejora tu fuerza, sino también tu coordinación, movilidad y control corporal. ¿Listo para dominar la barra y superar tus límites? 🚀🔥
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center px-4 sm:px-0">
          <Image 
            src="imgs/carousel1.jpg" 
            alt="Halterofilia img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
