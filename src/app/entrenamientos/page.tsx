import Image from "next/image";

export default function EntrenamientosPage() {
  return (
    <div className="flex flex-col items-center bg-gray-100 px-4 sm:px-4 md:px-10 lg:px-20 sm:pt-20 mb-15 w-full sm:w-auto">

      {/* Espaciado inicial en móviles y tablets */}
      <div className="block sm:hidden relative w-full h-[120px]"></div>
      <div className="hidden sm:block relative w-full h-[60px]"></div>

      <h2 className="text-3xl font-bold text-center w-full sm:w-3/4 py-2 shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg">
      Entrenamientos
      </h2>

      {/* Sección: WOD */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full mb-12 bg-white p-8 rounded-xl shadow-md gap-8 sm:gap-12">
        <div className="w-full sm:w-1/2 flex justify-center sm:px-0">
          <Image 
            src="/imgs/carousel1.jpg" 
            alt="Tabata img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 space-y-4">
          <br/>
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            WOD 💪🔥
          </h1>
          <p>El corazón del entrenamiento. El momento donde pones a prueba tu fuerza, resistencia y determinación. <strong>WOD</strong> (Workout of the Day) es el desafío diario que te hará sudar como nunca.</p>
          <p>⏳ <strong>¿Cómo funciona?</strong> Cada día, un reto distinto, con una combinación de ejercicios que te llevarán al límite:</p>
          <ul className="list-disc pl-5">
            <li>🏋️ Movimientos funcionales a alta intensidad</li>
            <li>⏱ Tiempo o repeticiones a superar</li>
            <li>🔥 Supera tus marcas y empuja más fuerte</li>
          </ul>
          <p>No importa si eres principiante o un atleta experimentado, cada WOD es un nuevo desafío. ¿Estás listo para darlo todo? 🚀🔥</p>
        </div>
      </div>

      {/* Sección: HALTEROFILIA */}
      <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start w-full mb-12 bg-blue-100 p-8 rounded-xl shadow-md gap-8 sm:gap-12">
        <div className="w-full sm:w-1/2 flex justify-center sm:px-0">
          <Image 
            src="/imgs/carousel1.jpg" 
            alt="EMOM img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 space-y-4">
        <br />
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            HALTEROFILIA 🏋️‍♂️🔥
          </h1>
          <p>
            La halterofilia no es solo levantar peso, es una disciplina de fuerza, velocidad y técnica. Los levantamientos olímpicos 
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
      </div>

      {/* Sección: AMRAP */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full mb-12 bg-white p-8 rounded-xl shadow-md gap-8 sm:gap-12">
        <div className="w-full sm:w-1/2 flex justify-center sm:px-0">
          <Image 
            src="/imgs/carousel1.jpg" 
            alt="AMRAP img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 space-y-4">
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
      <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start w-full mb-12 bg-blue-100 p-8 rounded-xl shadow-md gap-8 sm:gap-12">
        <div className="w-full sm:w-1/2 flex justify-center sm:px-0">
          <Image 
            src="/imgs/carousel1.jpg" 
            alt="EMOM img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 space-y-4">
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
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full mb-12 bg-white p-8 rounded-xl shadow-md gap-8 sm:gap-12">
        <div className="w-full sm:w-1/2 flex justify-center sm:px-0">
          <Image 
            src="/imgs/carousel1.jpg" 
            alt="Murph img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 space-y-4">
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

      {/* Sección: TRAIL RUN */}
      <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start w-full mb-12 bg-blue-100 p-8 rounded-xl shadow-md gap-8 sm:gap-12">
        <div className="w-full sm:w-1/2 flex justify-center sm:px-0">
          <Image 
            src="/imgs/carousel1.jpg" 
            alt="Run Trail img" 
            width={800} 
            height={450}
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 space-y-4">
        <br />
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            TRAIL RUN 🏃🌄🔥
          </h1>
          <p>
            Correr en la montaña no es solo un ejercicio, es una aventura. **El trail running** combina resistencia, fuerza y estrategia mientras te enfrentas 
            a terrenos irregulares, desniveles extremos y paisajes espectaculares. Aquí no solo corres, **te adaptas, superas y conquistas cada ruta.**
          </p>
          <p>💪 <strong>¿Qué lo hace único? Prepárate:</strong></p>
          <ul className="list-disc pl-5">
            <li>🏔️ <strong>Terrenos desafiantes</strong>: Senderos de tierra, rocas, barro y subidas exigentes.</li>
            <li>⚡ <strong>Resistencia y fuerza</strong>: No solo se trata de correr rápido, sino de **aguantar y adaptarte** a cada tramo.</li>
            <li>🔥 <strong>Subidas y bajadas</strong>: Control, técnica y potencia en cada cambio de desnivel.</li>
            <li>🎯 <strong>Estrategia y mente</strong>: Dosifica tu energía, elige bien el calzado y prepárate para cualquier clima.</li>
          </ul>
          <p>
            Si buscas un reto que combine naturaleza y rendimiento físico, **el trail running es para ti.** Cada kilómetro es un desafío, cada cumbre un logro. 
            ¿Listo para conquistar la montaña? 🚀🔥
          </p>
        </div>

      </div>
    </div>
  );
}
