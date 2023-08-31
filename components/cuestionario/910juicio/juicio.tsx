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
    <div  className="mt-24 pt-24">
    <div  className="mt-24  pt-10">
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black text-3xl">SI TENGO QUE JUZGAR A UNA PERSONA POR SUS ACTOS:</h2>
     <div className="flex flex-row justify-center my-5 text-8xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "JUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("JUSTO")}
       >
        ME BASO EN HECHOS
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "INJUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("INJUSTO")}
       >
        ME BASO EN EMOCIONES
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

export default Juicio;