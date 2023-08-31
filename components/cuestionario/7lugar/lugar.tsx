import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface LugarProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setLugar: React.Dispatch<React.SetStateAction<string>>;

}

const Lugar: React.FC<LugarProps> = ({ setComponenteActual, setLugar }) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setLugar(option);
    setComponenteActual("humor");
  };
 

  return (
    <div  className="mt-24 pt-24">
    <div  className="mt-24  pt-10">
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black text-3xl">ME GUSTA MÁS VIVIR EN:</h2>
     <div className="flex flex-row justify-center my-5 text-8xl">
       <button
         className={`mr-10  px-5 py-2  ${selectedOption === "CAMPO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("CAMPO")}
       >
         CAMPO
       </button>
       <button
         className={`ml-10 px-5 py-2   ${selectedOption === "CIUDAD" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("CIUDAD")}
       >
         CIUDAD
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

export default Lugar;