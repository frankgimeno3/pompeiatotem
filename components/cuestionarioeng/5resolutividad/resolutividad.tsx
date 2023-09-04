import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface ResolutividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setResolutividad: React.Dispatch<React.SetStateAction<string>>;
}

const Resolutividad: React.FC<ResolutividadProps> = ({
  setComponenteActual,
  setResolutividad,
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
    setResolutividad(option);
    setComponenteActual("trabajo");
  };


  return (
    <div
    className={`flex flex-col pt-14 justify-right ml-24 pl-24      ${
      isVisible
        ? "transition-opacity duration-1000 opacity-100"
        : "  opacity-0"
    }`}
  >    <div className=" flex flex-col mt-24 ml-24 pl-24  justify-end text-8xl ">
      <div className="flex flex-col pl-24  mx-auto">
        <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
              selectedOption === "CONFRONTACIÓN"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("CONFRONTACIÓN")}
          >
            CONFRONT
          </button>
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
              selectedOption === "NEGOCIACIÓN"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("NEGOCIACIÓN")}
          >
            NEGOTIATE
          </button>
        </div>
      </div> 
    </div>
  );
};

export default Resolutividad;
