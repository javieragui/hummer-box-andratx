export default function ScheduleTable() {
  const days: Array<keyof typeof schedule[0]["clases"]> = ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];

  const schedule = [
    { time: "6:45", clases: { lunes: "WOD", martes: "WOD", miércoles: "WOD", jueves: "WOD", viernes: "WOD", sabado: "", domingo: "" } },
    { time: "8:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miércoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "9:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miércoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "MURPH\nOPEN BOX", domingo: "" } },
    { time: "10:30", clases: { lunes: "", martes: "", miércoles: "", jueves: "", viernes: "", sabado: "HALTEROFILIA", domingo: "" } },
    { time: "15:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miércoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "16:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miércoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "17:30", clases: { lunes: "KIDS", martes: "WOD\nOPEN BOX", miércoles: "KIDS", jueves: "WOD\nOPEN BOX", viernes: "KIDS", sabado: "", domingo: "" } },
    { time: "18:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miércoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
    { time: "19:30", clases: { lunes: "WOD\nOPEN BOX", martes: "WOD\nOPEN BOX", miércoles: "WOD\nOPEN BOX", jueves: "WOD\nOPEN BOX", viernes: "WOD\nOPEN BOX", sabado: "", domingo: "" } },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 px-4 sm:px-4 md:px-10 lg:px-20 sm:pt-20 mb-20 w-full sm:w-auto">
      {/* Este div se muestra solo en móviles */}
      <div className="block sm:hidden relative w-full h-[120px]"></div>

      {/* Este div se muestra solo en tablets y pantallas más grandes */}
      <div className="hidden sm:block relative w-full h-[60px]"></div>
      <h2 className="text-3xl font-bold text-center mb-6 w-full sm:w-3/4 py-2 shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-lg">
        Horario de Clases
      </h2>
      <div className="overflow-x-auto w-full sm:w-3/4">
        <table className="table-auto border-collapse w-full text-center bg-white shadow-lg rounded-lg">
          <thead className="bg-sky-500 text-white">
            <tr>
              <th className="px-2 sm:px-4 py-2 sticky left-0 bg-sky-500 text-[10px] sm:text-xs uppercase">
                Horas
              </th>
              {days.map((day) => (
                <th key={day} className="px-2 sm:px-4 py-2 uppercase text-[10px]">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, index) => (
              <tr key={index} className="odd:bg-gray-200 even:bg-white border-b">
                <td className="px-2 sm:px-4 py-2 font-bold text-blue-700 align-middle sticky left-0 bg-white text-[10px] sm:text-xs">
                  {row.time}
                </td>
                {days.map((day, i) => (
                  <td key={i} className="px-2 sm:px-4 py-2 font-bold whitespace-pre-line text-[10px] sm:text-xs">
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
                        {classItem.replace('OPEN BOX', 'OPEN\u00A0BOX')}<br />
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