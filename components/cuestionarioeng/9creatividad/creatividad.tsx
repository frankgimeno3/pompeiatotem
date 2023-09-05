import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface CreatividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setCreatividad: React.Dispatch<React.SetStateAction<string>>;
}

const Creatividad: React.FC<CreatividadProps> = ({
  setComponenteActual,
  setCreatividad,
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
    setCreatividad(option);
    setComponenteActual("juicio");
  };
  return (
    <div
      className={`flex flex-col  justify-right ml-24 pl-24      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
            <div className="pl-20 ml-20 mt-20">

      <div className="pl-24 flex flex-col ml-24  ">
        <div className=" ml-24 pl-24">
          <button
            className="w-600 text-6xl h-200 px-24 py-10   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: 'url("/buttonB.png")' }}
            onClick={() => handleOptionClick("CREATIVO")}
          >
            CREATIVE
          </button>
        </div>

        <div className=" ml-24 pl-24">
          <button
            className="w-600 text-6xl h-200 px-24 py-10   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: 'url("/buttonB.png")' }}
            onClick={() => handleOptionClick("RACIONAL")}
          >
            RATIONAL
          </button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Creatividad;
