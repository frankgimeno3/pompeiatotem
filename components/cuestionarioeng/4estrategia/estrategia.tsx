import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

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
      <h2 className="text-black text-3xl">IN MY DAILY LIFE, I AM:</h2>
      <div className="flex flex-row justify-center my-10 text-8xl">
        <button
          className={`mr-10 px-5 py-2 ${
            selectedOption === "ESTRATEGA" ? "bg-white bg-opacity-40 rounded-full" : ""
          }`}
          onClick={() => handleOptionClick("ESTRATEGA")}
        >
          STRATEGIST
        </button>
        <button
          className={`ml-10 px-5 py-2 ${
            selectedOption === "IMPULSIVO" ? "bg-white bg-opacity-40 rounded-full" : ""
          }`}
          onClick={() => handleOptionClick("IMPULSIVO")}
        >
          IMPULSIVE
        </button>
      </div>
      </div>
        </div> 
        <button className="mt-3 ml-3">
            <Restartbutton />
          </button>
    </div>
  );
};

export default Estrategia;
