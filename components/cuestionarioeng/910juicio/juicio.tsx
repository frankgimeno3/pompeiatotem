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
  >    
  
      <div className="flex flex-col mr-24 mt-10 pr-24 justify-end ">
        <div className="pr-24 flex flex-col mr-24 ">
          <div className=" mr-24 pr-24">
            <button
              className="w-600 text-6xl h-200 px-24 py-10   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("JUSTO")}
            >
            EMPIRICALLY
            </button>
          </div>

          <div className="  pr-24 mr-24 ">
          <button
              className="w-600 text-6xl h-200 px-20 py-10   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("INJUSTO")}
            >
            EMOTIONALLY
            </button>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Juicio;
