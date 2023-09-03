import React, { useState } from "react";
import Restartbutton from "./../../Restartbutton";

interface ConflictoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setConflicto: React.Dispatch<React.SetStateAction<string>>;
}

const Conflicto: React.FC<ConflictoProps> = ({
  setComponenteActual,
  setConflicto,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setConflicto(option);
    setComponenteActual("relaciones");
  };

  return (
    <div className="flex flex-col mt-24 pt-24 justify-right ml-24 pl-24 ">
    <div className=" flex flex-col mt-24 ml-24 pl-24 pt-10 justify-end text-8xl ">
      <button
        className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
                selectedOption === "PACÍFICO"
                  ? "bg-white bg-opacity-40 rounded-full"
                  : ""
              }`}
              onClick={() => handleOptionClick("PACÍFICO")}
            >
              PACIFIC
            </button>
            <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24${
            selectedOption === "GUERRERO"
                  ? "bg-white bg-opacity-40 rounded-full"
                  : ""
              }`}
              onClick={() => handleOptionClick("GUERRERO")}
            >
              WARRIOR
              </button>
      </div>
      <button className="mt-20 ml-24">
        <Restartbutton />
      </button>
    </div>
  );
};

export default Conflicto;
