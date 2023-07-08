import React, { useState, useEffect } from "react";

interface EstrategiaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Estrategia: React.FC<EstrategiaProps> = ({ setComponenteActual }) => {
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
      setComponenteActual("resolutividad");
    }
  };

  return (
     <div className="flex flex-col text-center justify-center">
      <h2>EN MI DÍA SOY:</h2>
      <div className="flex flex-row justify-center my-5">
        <button
          className={`mr-10 ${selectedOption === "ENAMORADIZO" ? "bg-white" : ""}`}
          onClick={() => handleOptionClick("ENAMORADIZO")}
        >
          ESTRATEGA
        </button>
        <button
          className={`ml-10 ${selectedOption === "FIEL" ? "bg-white" : ""}`}
          onClick={() => handleOptionClick("FIEL")}
        >
          IMPULSIVO
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

export default Estrategia;