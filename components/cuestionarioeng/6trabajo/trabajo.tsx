import React, { useState, useEffect } from "react";

interface TrabajoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setTrabajo: React.Dispatch<React.SetStateAction<string>>;
}

const Trabajo: React.FC<TrabajoProps> = ({ setComponenteActual, setTrabajo}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setTrabajo(selectedOption);
    setComponenteActual("lugar");
  };



  return (
    <div className="flex flex-col text-center justify-center">
     <h2 className="text-black">I SEE MYSELF AS:</h2>
     <div className="flex flex-row justify-center my-5 text-4xl">
       <button
         className={`mr-10 px-5 py-2  ${selectedOption === "TRABAJADOR" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("TRABAJADOR")}
       >
        A HARDWORKER
       </button>
       <button
         className={`ml-10 px-5 py-2  ${selectedOption === "HOLGAZÁN" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("HOLGAZÁN")}
       >
        AN IDLER
       </button>
     </div>
 
   </div>
 );
};

export default Trabajo;