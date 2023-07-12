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
      <h2 className="text-black">EN UNA SITUACIÓN PROBLEMÁTICA TIENDO A:</h2>
      <div className="flex flex-row justify-center my-5 text-4xl">
        <button
          className={`mr-10 ${selectedOption === "CONFRONTACIÓN" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
          onClick={() => handleOptionClick("CONFRONTACIÓN")}
        >
          CONFRONTACIÓN
        </button>
        <button
          className={`ml-10 ${selectedOption === "NEGOCIACIÓN" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
          onClick={() => handleOptionClick("NEGOCIACIÓN")}
        >
          NEGOCIACIÓN
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

export default Resolutividad;