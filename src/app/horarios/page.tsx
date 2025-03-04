import { Card } from "@/components/ui/card";

const schedule = [
  ["6:45", "WOD", "WOD", "WOD", "WOD", "WOD", "9:30", "MURPH"],
  ["8:30", "WOD", "WOD", "WOD", "WOD", "WOD", "", "OPEN BOX"],
  ["", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "10:30", "HALTEROFILIA"],
  ["9:30", "WOD", "WOD", "WOD", "WOD", "WOD", "", ""],
  ["", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "", ""],
  ["15:30", "WOD", "WOD", "WOD", "WOD", "WOD", "", ""],
  ["", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "", ""],
  ["16:30", "WOD", "WOD", "WOD", "WOD", "WOD", "", ""],
  ["", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "", ""],
  ["17:30", "KIDS", "WOD", "KIDS", "WOD", "KIDS", "", ""],
  ["", "", "OPEN BOX", "", "OPEN BOX", "", "", ""],
  ["18:30", "WOD", "WOD", "WOD", "WOD", "WOD", "", ""],
  ["", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "", ""],
  ["19:30", "WOD", "WOD", "WOD", "WOD", "WOD", "", ""],
  ["", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "OPEN BOX", "", ""]
];

const getColor = (activity) => {
  switch (activity) {
    case "WOD":
      return "text-gray-900";
    case "KIDS":
      return "text-yellow-500";
    case "HALTEROFILIA":
      return "text-red-700";
    case "OPEN BOX":
      return "text-pink-500";
    case "MURPH":
      return "text-sky-500";
    default:
      return "text-gray-500";
  }
};

export default function ScheduleTable() {
  return (
    <div className="flex flex-col items-center justify-start w-full px-2 sm:px-4 md:px-10 lg:px-20 sm:pt-20 mb-6">
        {/* Este div se muestra solo en móviles */}
        <div className="block sm:hidden relative w-full h-[120px]"></div>

        {/* Este div se muestra solo en tablets y pantallas más grandes */}
        <div className="hidden sm:block relative w-full h-[60px]"></div>
        
      <Card className="w-full max-w-4xl overflow-x-auto p-4 shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-sky-500 text-white">
              <th className="p-2">Lunes</th>
              <th className="p-2">Martes</th>
              <th className="p-2">Miércoles</th>
              <th className="p-2">Jueves</th>
              <th className="p-2">Viernes</th>
              <th className="p-2">Sábado</th>
              <th className="p-2">Domingo</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, rowIndex) => (
              <>
                <tr key={`hour-${rowIndex}`} className="bg-gray-200 text-gray-800 font-bold">
                  <td colSpan={7} className="p-2 text-center rounded-md font-extrabold">{row[0]}</td>
                </tr>
                <tr key={rowIndex} className="even:bg-gray-100">
                  {row.slice(1).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-2 text-center ${getColor(cell)}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
