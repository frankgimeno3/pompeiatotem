import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface CreatividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setCreatividad: React.Dispatch<React.SetStateAction<string>>;

}

const Creatividad: React.FC<CreatividadProps> = ({ setComponenteActual, setCreatividad}) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setCreatividad(option);
    setComponenteActual("juicio");

  };
 

  return (
    <div className="flex flex-col mt-24 pt-24 justify-right ml-24 pl-24 ">
    <div className=" flex flex-col mt-24 ml-24 pl-24 pt-10 justify-end text-8xl ">
      <div className="flex flex-col pl-24  ">
        <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
            selectedOption === "CREATIVO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("CREATIVO")}
       >
        CREATIVE
       </button>
       <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
              selectedOption === "RACIONAL" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("RACIONAL")}
       >
        RATIONAL
        </button>
        </div>
      </div>
      <button className="mt-20 mr-24">
        <Restartbutton />
      </button>
    </div>
  );
};

export default Creatividad;