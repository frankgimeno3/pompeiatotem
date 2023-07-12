import React, { useState } from "react";

interface ConflictoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setConflicto: React.Dispatch<React.SetStateAction<string>>;
}

const Conflicto: React.FC<ConflictoProps> = ({ setComponenteActual, setConflicto }) => {
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
      setComponenteActual("relaciones");
      setConflicto(selectedOption)
      console.log(selectedOption)

    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h2 className="text-black">EN UNA SITUACION DE CONFLICTO SOY:</h2>
      <div className="flex flex-row justify-center my-10 text-4xl ">
        <button
          className={`mr-20 px-5 py-2 ${selectedOption === "PACÍFICO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
          onClick={() => handleOptionClick("PACÍFICO")}
        >
          PACÍFICO
        </button>
        <button
          className={`ml-20 px-5 py-2 ${selectedOption === "GUERRERO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
          onClick={() => handleOptionClick("GUERRERO")}
        >
          GUERRERO
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

export default Conflicto;