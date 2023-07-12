import React, { useState, useEffect } from "react";

interface TrabajoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setTrabajo: React.Dispatch<React.SetStateAction<string>>;
}

const Trabajo: React.FC<TrabajoProps> = ({ setComponenteActual, setTrabajo}) => {
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
      setComponenteActual("lugar");
      setTrabajo(selectedOption)

    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
     <h2>ME CONSIDERO:</h2>
     <div className="flex flex-row justify-center my-5">
       <button
         className={`mr-10 ${selectedOption === "TRABAJADOR" ? "bg-white" : ""}`}
         onClick={() => handleOptionClick("TRABAJADOR")}
       >
         TRABAJADOR
       </button>
       <button
         className={`ml-10 ${selectedOption === "HOLGAZÁN" ? "bg-white" : ""}`}
         onClick={() => handleOptionClick("HOLGAZÁN")}
       >
         HOLGAZÁN
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

export default Trabajo;