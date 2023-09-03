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

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setHorario(option);
    setComponenteActual("alea");
  };

  return (
    <div className="flex flex-col mt-24 pt-24 justify-right ml-24 pl-24 ">
      <div className=" flex flex-col mt-24 ml-24 pl-24 pt-10 justify-end text-8xl ">
        <div className="flex flex-col pl-24 pt-10">
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
              selectedOption === "DIURNO"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("DIURNO")}
          >
            DAYTIME PERSON
          </button>
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
              selectedOption === "NOCTURNO"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("NOCTURNO")}
          >
            NIGHT PERSON
          </button>
        </div>
      </div>
      <button className="mt-20 ml-24">
        <Restartbutton />
      </button>
    </div>
  );
};

export default Horario;
