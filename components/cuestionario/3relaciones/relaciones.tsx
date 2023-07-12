import React, { useState, useEffect } from "react";

interface RelacionesProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setRelaciones: React.Dispatch<React.SetStateAction<string>>;
}

const Relaciones: React.FC<RelacionesProps> = ({
  setComponenteActual,
  setRelaciones,
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
      setComponenteActual("estrategia");
      setRelaciones(selectedOption);
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h2 className="text-black">EN LAS RELACIONES AMOROSAS SOY:</h2>
      <div className="flex flex-row justify-center my-10 text-4xl ">
        <button
          className={`mr-10 px-5 py-2 ${
            selectedOption === "ENAMORADIZO"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("ENAMORADIZO")}
        >
          ENAMORADIZO
        </button>
        <button
          className={`ml-10 px-5 py-2 ${
            selectedOption === "FIEL"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("FIEL")}
        >
          FIEL
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

export default Relaciones;
