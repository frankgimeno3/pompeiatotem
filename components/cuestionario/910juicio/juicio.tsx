import React, { useState, useEffect } from "react";

interface JuicioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setJuicio: React.Dispatch<React.SetStateAction<string>>;

}

const Juicio: React.FC<JuicioProps> = ({ setComponenteActual, setJuicio  }) => {
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
      setComponenteActual("horario");
      setJuicio(selectedOption)      
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black">SI TENGO QUE JUZGAR A UNA PERSONA POR SUS ACTOS:</h2>
     <div className="flex flex-row justify-center my-5 text-4xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "JUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("JUSTO")}
       >
        ME BASO EN HECHOS
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "INJUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("INJUSTO")}
       >
        ME BASO EN EMOCIONES
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

export default Juicio;