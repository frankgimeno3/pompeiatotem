import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface TrabajoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setTrabajo: React.Dispatch<React.SetStateAction<string>>;
}

const Trabajo: React.FC<TrabajoProps> = ({
  setComponenteActual,
  setTrabajo,
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
    setTrabajo(option);
    setComponenteActual("lugar");
  };

  return (
    <div
      className={`flex flex-col   justify-right mr-24 pr-24      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
      <div className="flex flex-col mr-16 mt-24 pr-16 justify-end ">
        <div className="pr-24 flex flex-col mx-24 ">
          <div className=" mr-24 pr-24">
            <button
              className="w-600 text-6xl h-200 px-16 py-10   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("ESTRATEGA")}
            >
              A  HARDWORKER
            </button>
          </div>

          <div className="  pr-24 mr-24 ">
            <div className="mx-24 px-14">
            <div
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              className=" text-6xl h-200   py-9    mt-24 mr-24  ml-24 bg-cover bg-center rounded-3xl"
              onClick={() => handleOptionClick("IMPULSIVO")}
            >
              AN IDLER
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajo;
