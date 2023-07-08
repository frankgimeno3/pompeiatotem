import React, { useState, useEffect } from "react";

interface TrabajoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Trabajo: React.FC<TrabajoProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSeguirClick = () => {
 
      setComponenteActual("lugar");
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
     <button
       className="mt-2 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
       onClick={handleSeguirClick}
     >
       SEGUIR
     </button>
   </div>
 );
};

export default Trabajo;