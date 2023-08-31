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
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setEstrategia(option);
    setComponenteActual("resolutividad");

  };
 

  return (
    <div  className="mt-24 pt-24">
    <div  className="mt-24  pt-10">

    <div className="flex flex-col text-center justify-center">
      <h2 className="text-black text-3xl">EN MI DÍA SOY:</h2>
      <div className="flex flex-row justify-center my-10 text-8xl">
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
      </div>
      </div>

    </div>
  );
};

export default Estrategia;
