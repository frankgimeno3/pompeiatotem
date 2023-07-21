import React, { useState, useEffect } from "react";

interface JuicioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setJuicio: React.Dispatch<React.SetStateAction<string>>;

}

const Juicio: React.FC<JuicioProps> = ({ setComponenteActual, setJuicio  }) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setJuicio(selectedOption);
    setComponenteActual("horario");
  };
 

  return (
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black text-xl">IF I HAVE TO JUDGE A PERSON BY THEIR ACTS, I DO IT:</h2>
     <div className="flex flex-row justify-center my-5 text-5xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "JUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("JUSTO")}
       >
        EMPIRICALLY
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "INJUSTO" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("INJUSTO")}
       >
        EMOTIONALLY
       </button>
     </div>
     
   </div>
  );
};

export default Juicio;