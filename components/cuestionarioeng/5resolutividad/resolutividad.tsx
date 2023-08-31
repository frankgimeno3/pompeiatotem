import React, { useState, useEffect } from "react";

interface ResolutividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setResolutividad: React.Dispatch<React.SetStateAction<string>>;

}

const Resolutividad: React.FC<ResolutividadProps> = ({ setComponenteActual, setResolutividad}) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setResolutividad(option);
    setComponenteActual("trabajo");
  };

  
   return (
    <div  className="mt-24 pt-24">
    <div  className="mt-24  pt-10">
     <div className="flex flex-col text-center justify-center">
      <h2 className="text-black text-3xl">IN A PROBLEMATIC SITUATION I TEND TO:</h2>
      <div className="flex flex-row justify-center my-5 text-8xl">
        <button
          className={`mr-10 px-5 py-2 ${selectedOption === "CONFRONTACIÓN" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
          onClick={() => handleOptionClick("CONFRONTACIÓN")}
        >
          CONFRONT
        </button>
        <button
          className={`ml-10 px-5 py-2 ${selectedOption === "NEGOCIACIÓN" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
          onClick={() => handleOptionClick("NEGOCIACIÓN")}
        >
          NEGOTIATE
        </button>
      </div>
      </div>
        </div>
    </div>
  );
};

export default Resolutividad;