import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface RelacionesProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setRelaciones: React.Dispatch<React.SetStateAction<string>>;
}

const Relaciones: React.FC<RelacionesProps> = ({
  setComponenteActual,
  setRelaciones,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setRelaciones(option);
    setComponenteActual("estrategia");
  };
 
   return (
    <div className="flex flex-col mt-24 pt-24 justify-right ml-24 pl-24 ">
      <div className=" flex flex-col mt-24 ml-24 pl-24 pt-10 justify-end text-8xl ">
        <div className="pl-24 flex flex-col">
        <button
        className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
            selectedOption === "ENAMORADIZO"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("ENAMORADIZO")}
        >
          POLIAMOROUS
        </button>
        <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24${
            selectedOption === "FIEL"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("FIEL")}
        >
          MONOGAMOUS
          </button>
      </div>
      </div>
      <button className="mt-20 ml-24">
        <Restartbutton />
      </button>
    </div>
  );
};

export default Relaciones;
