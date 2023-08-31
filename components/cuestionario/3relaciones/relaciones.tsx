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
    <div  className="mt-24 pt-24">
    <div  className="mt-24  pt-10">

    <div className="flex flex-col text-center justify-center">
    <h2 className="text-black text-3xl mt-14">EN LAS RELACIONES AMOROSAS SOY:</h2>
    <div className="flex flex-row justify-center my-10 text-8xl ">
        <button
          className={`mr-10 px-5 py-2 ${
            selectedOption === "ENAMORADIZO"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("ENAMORADIZO")}
        >
          ENAMORADIZO
        </button>
        <button
          className={`ml-10 px-5 py-2 ${
            selectedOption === "FIEL"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("FIEL")}   
        >                                                                                  
          COMPROMETIDO
        </button>
      </div>
      </div>
      </div>
      <button className="mt-3 ml-3">
            <Restartbutton />
          </button>
    </div>
  );
};

export default Relaciones;
