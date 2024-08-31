
import { useState } from "react";

export default function PresentLevelsPage() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  
  // Array of grades from "K" to "12"
  const grades = ["K", ...Array.from({ length: 12 }, (_, i) => (i + 1).toString())];

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-4xl overflow-x-scroll whitespace-nowrap scrollbar-hide">
        {grades.map((grade, index) => (
          <button
            key={index}
            onClick={() => setSelectedGrade(grade)}
            className={`inline-block m-2 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 font-bold ${
              selectedGrade === grade ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white`}
          >
            {grade}
          </button>
        ))}
      </div>
    </div>
  );
}
