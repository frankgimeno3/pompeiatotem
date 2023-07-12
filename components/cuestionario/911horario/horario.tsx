import React, { useState, useEffect } from "react";

interface HorarioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHorario: React.Dispatch<React.SetStateAction<string>>;

}

const Horario: React.FC<HorarioProps> = ({ setComponenteActual, setHorario }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSeguirClick = () => {
    if (!selectedOption) {
      setShowErrorMessage(true);
    } else {
      setComponenteActual("alea");
      setHorario(selectedOption)
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black">ME CONSIDERO:</h2>
     <div className="flex flex-row justify-center my-5 text-4xl">
       <button
         className={`mr-10 ${selectedOption === "DIURNO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("DIURNO")}
       >
        DIURNO
       </button>
       <button
         className={`ml-10 ${selectedOption === "NOCTURNO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("NOCTURNO")}
       >
        NOCTURNO
       </button>
     </div>
     {showErrorMessage && (
       <p className="text-red-500">POR FAVOR, SELECCIONA UNA OPCIÓN ANTES DE SEGUIR</p>
     )}
      <div className="mx-20">
        <button
          className="mt-2 px-6 py-1   text-md text-black bg-cyan-700 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
          SEGUIR
        </button>
      </div>
   </div>
  );
};

export default Horario;