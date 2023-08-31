import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface HorarioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHorario: React.Dispatch<React.SetStateAction<string>>;

}

const Horario: React.FC<HorarioProps> = ({ setComponenteActual, setHorario }) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setHorario(option);
    setComponenteActual("alea");
  };

   
  return (
    <div  className="mt-24 pt-24">
    <div  className="mt-24  pt-10">
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black text-3xl">ME CONSIDERO:</h2>
     <div className="flex flex-row justify-center my-5 text-8xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "DIURNO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("DIURNO")}
       >
        DIURNO
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "NOCTURNO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("NOCTURNO")}
       >
        NOCTURNO
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

export default Horario;