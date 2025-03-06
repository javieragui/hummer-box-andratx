export default function ScheduleTable() {
  const days: Array<keyof typeof schedule[0]["clases"]> = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

  const schedule = [
    { time: "6:45", clases: { lunes: "WOD", martes: "WOD", miercoles: "WOD", jueves: "WOD", viernes: "WOD", sabado: "", domingo: "" } },
    { time: "8:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miercoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "9:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miercoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "MURPH\nOPEN BOX", domingo: "" } },
    { time: "10:30", clases: { lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "HALTEROFILIA", domingo: "" } },
    { time: "15:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miercoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "16:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miercoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "17:30", clases: { lunes: "KIDS", martes: "WOD\nOPEN BOX", miercoles: "KIDS", jueves: "WOD\nOPEN BOX", viernes: "KIDS", sabado: "", domingo: "" } },
    { time: "18:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miercoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "19:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miercoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-2 sm:px-4 md:px-10 lg:px-20 sm:pt-20 mb-6">
       {/* Este div se muestra solo en móviles */}
       <div className="block sm:hidden relative w-full h-[120px]"></div>

      {/* Este div se muestra solo en tablets y pantallas más grandes */}
      <div className="hidden sm:block relative w-full h-[60px]"></div>
      <h2 className="text-3xl font-bold text-center mb-6 w-3/4 py-2 shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg">
        Horario de Clases
      </h2>
      <div className="overflow-x-auto px-4 w-3/4">
        <table className="table-auto border-collapse w-full text-center bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-sky-500 text-white">
            <tr>
              <th className="px-4 py-2">Horario</th>
              {days.map((day) => (
                <th key={day} className="px-4 py-2 capitalize">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, index) => (
              <tr key={index} className="odd:bg-gray-200 even:bg-white border-b">
                <td className="px-4 py-2 font-bold text-blue-700 align-middle">{row.time}</td>
                {days.map((day, i) => (
                  <td key={i} className="px-4 py-2 font-bold whitespace-pre-line">
                    {(row.clases[day] || "").split('\n').map((classItem, idx) => (
                      <span
                        key={idx}
                        className={
                          classItem.includes('WOD') ? 'text-black' :
                          classItem.includes('OPEN BOX') ? 'text-pink-300' :
                          classItem.includes('MURPH') ? 'text-gray' :
                          classItem.includes('KIDS') ? 'text-yellow-400' :  
                          classItem.includes('HALTEROFILIA') ? 'text-red-500' : ''
                        }
                      >
                        {classItem}<br />
                      </span>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
