import React, { useState, useEffect } from "react";

interface CreatividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Creatividad: React.FC<CreatividadProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSeguirClick = () => {
 
      setComponenteActual("juicio");
   };

  return (
    <div className="flex flex-col text-center justify-center">
     <h2>ME CONSIDERO:</h2>
     <div className="flex flex-row justify-center my-5">
       <button
         className={`mr-10 ${selectedOption === "CREATIVO" ? "bg-white" : ""}`}
         onClick={() => handleOptionClick("CREATIVO")}
       >
        CREATIVO
       </button>
       <button
         className={`ml-10 ${selectedOption === "RACIONAL" ? "bg-white" : ""}`}
         onClick={() => handleOptionClick("RACIONAL")}
       >
        RACIONAL
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

export default Creatividad;