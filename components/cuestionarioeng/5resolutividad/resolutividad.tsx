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
  >     

      <div className="pl-24 flex flex-col mx-24  ">
        <div className=" ml-24 pl-24">
          <button
            className="w-600 text-7xl h-200 px-16 py-10   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: 'url("/buttonB.png")' }}
            onClick={() => handleOptionClick("CONFRONTACIÓN")}
          >
            CONFRONT
          </button>
        </div>

        <div className=" ml-24 pl-24">
          <button
            className="w-600 text-7xl h-200 px-16 py-10   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: 'url("/buttonB.png")' }}
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
