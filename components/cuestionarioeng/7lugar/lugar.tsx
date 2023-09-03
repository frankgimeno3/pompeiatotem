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
    <div className="flex flex-col mt-24 pt-24 justify-right mr-24 pr-24 ">
    <div className=" flex flex-col mt-24 mr-24 pr-24 pt-10 justify-start text-8xl ">
      <div className="pr-24 flex flex-col">
        <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24 ${
            selectedOption === "CAMPO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("CAMPO")}
       >
         THE FIELD
       </button>
       <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24${
              selectedOption === "CIUDAD" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("CIUDAD")}
       >
         A CITY
         </button>
        </div>
      </div>
      <button className="mt-20 mr-24">
        <Restartbutton />
      </button>
    </div>
  );
};

export default Lugar;