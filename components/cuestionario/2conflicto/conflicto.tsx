import React, { useState } from "react";

interface ConflictoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setConflicto: React.Dispatch<React.SetStateAction<string>>;
}

const Conflicto: React.FC<ConflictoProps> = ({
  setComponenteActual,
  setConflicto,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setConflicto(option);
    setComponenteActual("relaciones");
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h2 className="text-black text-xl">EN UNA SITUACION DE CONFLICTO SOY:</h2>
      <div className="flex flex-row justify-center my-10 text-5xl ">
        <button
          className={`mr-20 px-5 py-2 ${
            selectedOption === "PACÍFICO"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("PACÍFICO")}
        >
          PACÍFICO
        </button>
        <button
          className={`ml-20 px-5 py-2 ${
            selectedOption === "GUERRERO"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("GUERRERO")}
        >
          GUERRERO
        </button>
      </div>
    </div>
  );
};

export default Conflicto;
