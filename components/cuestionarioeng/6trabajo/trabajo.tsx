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
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setTrabajo(option);
    setComponenteActual("lugar");
  };

  return (
    <div className="flex flex-col   justify-right mr-24 pr-24 ">
      <div className=" flex flex-col   mr-24 pr-24 justify-start text-8xl ">
        <div className="pr-24 flex flex-col mx-auto">
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24 ${
              selectedOption === "TRABAJADOR"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("TRABAJADOR")}
          >
            A HARDWORKER
          </button>
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24${
              selectedOption === "HOLGAZÁN"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("HOLGAZÁN")}
          >
            AN IDLER
          </button>
        </div>
      </div> 
    </div>
  );
};

export default Trabajo;
