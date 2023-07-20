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
        <div className="flex flex-row text-5xl pb-1 justify-center ">
            <h1 >HOLA,</h1>
            <div className="border-b border-gray-400 mb-2 mx-5 px-5">
                <h2 className="text-4xl ">{nombre}</h2>
 
            </div>
            </div>
        <p className="text-black text-xs ">HE AQUÍ TODOS LOS DIOSES ROMANOS</p>

      </div>
      <div className="mt-20">
      <p className="text-black text-xs">¿CUÁL DE ELLOS TE REPRESENTA MEJOR?</p>
      <p className="text-black text-xs">
        ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS...
      </p>
      </div>
      <div className="mx-20">

      <button
      className="mt-2 px-6 py-1   text-md text-black bg-cyan-700 rounded bg-opacity-40"
      onClick={handleSeguirClick}
      >
        ¡SAPERE AUDE!
      </button>
      </div>

    </div>
  );
};

export default Nombrehola;
