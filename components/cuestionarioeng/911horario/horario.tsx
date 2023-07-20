import React, { useState, useEffect } from "react";

interface HorarioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHorario: React.Dispatch<React.SetStateAction<string>>;

}

const Horario: React.FC<HorarioProps> = ({ setComponenteActual, setHorario }) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setHorario(selectedOption);
    setComponenteActual("alea");
  };

   
  return (
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black">ME CONSIDERO:</h2>
     <div className="flex flex-row justify-center my-5 text-4xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "DIURNO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("DIURNO")}
       >
        DIURNO
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "NOCTURNO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("NOCTURNO")}
       >
        NOCTURNO
       </button>
     </div>

   </div>
  );
};

export default Horario;