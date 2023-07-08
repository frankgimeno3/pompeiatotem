import React, { useState } from "react";

interface YahoraProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Yahora: React.FC<YahoraProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
 
  const handleSeguirClick = () => {
    if (!selectedOption) {
      setShowErrorMessage(true);
    } else {
      setComponenteActual("conflicto");
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h1>Y AHORA UN PEQUEÑO CUESTIONARIO...</h1>
      <button
        className="mt-2 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
        onClick={handleSeguirClick}
      >
        SÍ, VAMOS!
      </button>
    </div>
  );
};

export default Yahora;
