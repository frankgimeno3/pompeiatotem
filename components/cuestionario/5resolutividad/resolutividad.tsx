import React, { useState, useEffect } from "react";

interface ResolutividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setResolutividad: React.Dispatch<React.SetStateAction<string>>;

}

const Resolutividad: React.FC<ResolutividadProps> = ({ setComponenteActual, setResolutividad}) => {
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
      setComponenteActual("trabajo");
      setResolutividad(selectedOption)

    }
  };

  return (
     <div className="flex flex-col text-center justify-center">
      <h2>EN UNA SITUACIÓN PROBLEMÁTICA TIENDO A:</h2>
      <div className="flex flex-row justify-center my-5">
        <button
          className={`mr-10 ${selectedOption === "CONFRONTAR" ? "bg-white" : ""}`}
          onClick={() => handleOptionClick("CONFRONTAR")}
        >
          CONFRONTAR
        </button>
        <button
          className={`ml-10 ${selectedOption === "NEGOCIAR" ? "bg-white" : ""}`}
          onClick={() => handleOptionClick("NEGOCIAR")}
        >
          NEGOCIAR
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

export default Resolutividad;