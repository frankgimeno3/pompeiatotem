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
    <div  className="mt-24 pt-24">
    <div  className="mt-24  pt-10">
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black text-3xl">I DESCRIVE MYSELF AS:</h2>
     <div className="flex flex-row justify-center my-5 text-8xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "CREATIVO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("CREATIVO")}
       >
        CREATIVE
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "RACIONAL" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("RACIONAL")}
       >
        RATIONAL
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

export default Creatividad;