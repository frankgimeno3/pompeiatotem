import React, { useState, useEffect } from "react";

interface HumorProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHumor: React.Dispatch<React.SetStateAction<string>>;

}

const Humor: React.FC<HumorProps> = ({ setComponenteActual, setHumor }) => {
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
      setComponenteActual("creatividad");
      setHumor(selectedOption)

    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
     <h2>ME GUSTA MÁS VIVIR EN:</h2>
     <div className="flex flex-row justify-center my-5">
       <button
         className={`mr-10 ${selectedOption === "BUENHUMOR" ? "bg-white" : ""}`}
         onClick={() => handleOptionClick("BUENHUMOR")}
       >
         BUEN HUMOR
       </button>
       <button
         className={`ml-10 ${selectedOption === "MALHUMOR" ? "bg-white" : ""}`}
         onClick={() => handleOptionClick("MALHUMOR")}
       >
         MAL HUMOR
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

export default Humor;