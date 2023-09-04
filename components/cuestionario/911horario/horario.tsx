import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface HorarioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHorario: React.Dispatch<React.SetStateAction<string>>;
}

const Horario: React.FC<HorarioProps> = ({
  setComponenteActual,
  setHorario,
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
    setHorario(option);
    setComponenteActual("alea");
  };

  return (
    <div
      className={`flex flex-col  justify-right ml-14 pl-14      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
      <div className=" flex flex-col   ml-24 pl-24 text-8xl ">
        <div className="pr-24 flex flex-col   mx-auto">
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
              selectedOption === "DIURNO"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("DIURNO")}
          >
            DIURNO
          </button>
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24${
              selectedOption === "NOCTURNO"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("NOCTURNO")}
          >
            NOCTURNO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Horario;
