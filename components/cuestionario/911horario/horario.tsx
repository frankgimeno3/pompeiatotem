import React, { useState, useEffect } from "react";

interface HorarioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Horario: React.FC<HorarioProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSeguirClick = () => {
    if (!selectedOption) {
      setShowErrorMessage(true);
    } else {
      setComponenteActual("resultado");
    }
  };

  return (
    <div>
      <div> 
        <h2>Escribe tu nombre</h2>
        <p>(10 CARACTERES MAX)</p>
      </div>
      <button
        className="mt-2 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
        onClick={handleSeguirClick}
      >
        SEGUIR
      </button>
    </div>
  );
};

export default Horario;