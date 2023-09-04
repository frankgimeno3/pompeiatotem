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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setIsVisible(true);
    setSelectedOption(option);
    setEstrategia(option);
    setComponenteActual("resolutividad");
  };

  return (
    <div
      className={`flex flex-col justify-right mr-24 pr-24  
    ${
      isVisible ? "transition-opacity duration-1000 opacity-100" : "  opacity-0"
    }`}
    >
      <div className=" flex flex-col mt-24 mr-24 pr-24  justify-start text-8xl ">
        <div className="pr-24 flex flex-col mx-auto">
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24 ${
              selectedOption === "ESTRATEGA"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("ESTRATEGA")}
          >
            ESTRATEGA
          </button>
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24${
              selectedOption === "IMPULSIVO"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("IMPULSIVO")}
          >
            IMPULSIVO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Estrategia;
