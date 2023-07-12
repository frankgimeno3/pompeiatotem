import React, { useState, useEffect } from "react";

interface CreatividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setCreatividad: React.Dispatch<React.SetStateAction<string>>;

}

const Creatividad: React.FC<CreatividadProps> = ({ setComponenteActual, setCreatividad}) => {
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
      setComponenteActual("juicio");
      setCreatividad(selectedOption)
    }
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

export default Creatividad;