import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface JuicioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setJuicio: React.Dispatch<React.SetStateAction<string>>;

}

const Juicio: React.FC<JuicioProps> = ({ setComponenteActual, setJuicio  }) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setJuicio(option);
    setComponenteActual("horario");
  };
 

  return (
    <div className="flex flex-col mt-24 pt-24 justify-right mr-24 pr-24 ">
    <div className=" flex flex-col mt-24 mr-24 pr-24 pt-10 justify-start text-7xl ">
      <div className="pr-24 flex flex-col mt-20">
        <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24 ${
            selectedOption === "JUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("JUSTO")}
       >
        ME BASO EN HECHOS
       </button>
       <button
                     className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24${
                      selectedOption === "INJUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("INJUSTO")}
       >
        ME BASO EN EMOCIONES
        </button>
        </div>
      </div>
      <button className="mt-20 mr-24">
        <Restartbutton />
      </button>
    </div>
  );
};

export default Juicio;