import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface JuicioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setJuicio: React.Dispatch<React.SetStateAction<string>>;
}

const Juicio: React.FC<JuicioProps> = ({ setComponenteActual, setJuicio }) => {
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
    setJuicio(option);
    setComponenteActual("horario");
  };
  return (
    <div
    className={`flex flex-col mt-24 justify-right mr-24 pr-24      ${
      isVisible
        ? "transition-opacity duration-1000 opacity-100"
        : "  opacity-0"
    }`}
  >    <div className=" flex flex-col   mr-24 pr-24   justify-start text-8xl ">
      <div className="pr-24 flex flex-col   mx-auto">
        <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24 ${
              selectedOption === "JUSTO"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("JUSTO")}
          >
            EMPIRICALLY
          </button>
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24${
              selectedOption === "INJUSTO"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("INJUSTO")}
          >
            EMOTIONALLY
          </button>
        </div>
      </div> 
    </div>
  );
};

export default Juicio;
