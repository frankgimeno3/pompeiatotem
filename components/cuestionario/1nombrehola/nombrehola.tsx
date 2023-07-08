import React, { useState } from "react";

interface NombreholaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Nombrehola: React.FC<NombreholaProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSeguirClick = () => {
    if (!selectedOption) {
      setShowErrorMessage(true);
    } else {
      setComponenteActual("yahora");
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <div className="flex flex-col mb-10">
        <div className="flex flex-row">
            <h1>HOLA,</h1>
            <h2>LAURA!</h2>
        </div>
      </div>

      <p className="text-black">CUÁL DE ELLOS TE REPRESENTA MEJOR?</p>
      <p className="text-black">
        ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS...
      </p>
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
