import React, { useState } from "react";

interface NombreholaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  nombre: String
}

const Nombrehola: React.FC<NombreholaProps> = ({ setComponenteActual , nombre}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSeguirClick = () => {
 
      setComponenteActual("yahora");
    
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <div className="flex flex-col mb-20 text-center">
        <div className="flex flex-row text-4xl pb-1 justify-center ">
            <h1 >HOLA,</h1>
            <h2 className="ml-6 underline text-3xl ">____{nombre}____</h2>
 
        </div>
        <p className="text-black text-xs ">HE AQUÍ TODOS LOS DIOSES ROMANOS</p>

      </div>
      <div className="mt-20">
      <p className="text-black text-xs">¿CUÁL DE ELLOS TE REPRESENTA MEJOR?</p>
      <p className="text-black text-xs">
        ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS...
      </p>
      </div>

      <button
        className="mt-2 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
        onClick={handleSeguirClick}
      >
        ¡SAPERE AUDE!
      </button>
    </div>
  );
};

export default Nombrehola;
