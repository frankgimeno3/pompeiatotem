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
    <div className="flex flex-col mt-24 pt-24 justify-right mr-24 pr-24 ">
      <div className=" flex flex-col mt-24 mr-24 pr-24 pt-10 justify-start text-8xl ">
        <div className="pr-24 flex flex-col">
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24 ${
              selectedOption === "TRABAJADOR"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("TRABAJADOR")}
          >
            TRABAJADOR
          </button>
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24${
              selectedOption === "HOLGAZÁN"
                ? "bg-white bg-opacity-40 rounded-full"
                : ""
            }`}
            onClick={() => handleOptionClick("HOLGAZÁN")}
          >
            HOLGAZÁN
          </button>
        </div>
      </div>
      <button className="mt-20 mr-24">
        <Restartbutton />
      </button>
    </div>
  );
};

export default Trabajo;
