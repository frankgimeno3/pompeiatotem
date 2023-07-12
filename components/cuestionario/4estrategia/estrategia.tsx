import React, { useState, useEffect } from "react";

interface EstrategiaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setEstrategia: React.Dispatch<React.SetStateAction<string>>;
}

const Estrategia: React.FC<EstrategiaProps> = ({
  setComponenteActual,
  setEstrategia,
}) => {
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
      setEstrategia(selectedOption);
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h2 className="text-black">EN MI DÍA SOY:</h2>
      <div className="flex flex-row justify-center my-10 text-4xl">
        <button
          className={`mr-10 px-5 py-2 ${
            selectedOption === "ESTRATEGA" ? "bg-white bg-opacity-40 rounded-full" : ""
          }`}
          onClick={() => handleOptionClick("ESTRATEGA")}
        >
          ESTRATEGA
        </button>
        <button
          className={`ml-10 px-5 py-2 ${
            selectedOption === "IMPULSIVO" ? "bg-white bg-opacity-40 rounded-full" : ""
          }`}
          onClick={() => handleOptionClick("IMPULSIVO")}
        >
          IMPULSIVO
        </button>
      </div>
      {showErrorMessage && (
        <p className="text-red-500">
          POR FAVOR, SELECCIONA UNA OPCIÓN ANTES DE SEGUIR
        </p>
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

export default Estrategia;
