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
        <div className="flex flex-row text-7xl pb-1 justify-center align-end ">
            <h1 >HOLA,</h1>
            <div className="flex flex-col border-b border-gray-400 mb-2 justify-end mx-5 px-5 ">
                <h2 className="text-5xl ">{nombre}</h2>
 
            </div>
            </div>
        <p className="text-black text-lg ">HE AQUÍ TODOS LOS DIOSES ROMANOS</p>

      </div>
      <div className="mt-20">
      <p className="text-black text-lg">¿CUÁL DE ELLOS TE REPRESENTA MEJOR?</p>
      <p className="text-black text-lg">
        ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS...
      </p>
      </div>
      <div className="mx-20">

      <button
      className="mt-2 px-6 py-1   text-lg text-black bg-cyan-700 rounded bg-opacity-40"
      onClick={handleSeguirClick}
      >
        ¡SAPERE AUDE!
      </button>
      </div>

    </div>
  );
};

export default Nombrehola;
