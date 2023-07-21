import React, { useState, useEffect } from "react";

interface HumorProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHumor: React.Dispatch<React.SetStateAction<string>>;

}

const Humor: React.FC<HumorProps> = ({ setComponenteActual, setHumor }) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setHumor(selectedOption);
    setComponenteActual("creatividad");

  };
 

  return (
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black text-xl">ME GUSTA MÁS VIVIR EN:</h2>
     <div className="flex flex-row justify-center my-5 text-5xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "BUENHUMOR" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("BUENHUMOR")}
       >
         BUEN HUMOR
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "MALHUMOR" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("MALHUMOR")}
       >
         MAL HUMOR
       </button>
     </div>
    
   </div>
  );
};

export default Humor;