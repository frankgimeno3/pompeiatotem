import React, { useState, useEffect } from "react";

interface EnviarProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Enviar: React.FC<EnviarProps> = ({ setComponenteActual }) => {
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
      setComponenteActual("enviar");
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
       <p>¿QUIERES LLEVARTE A TU DIOS DE RECUERDO?</p>
       
            <p>PIDE TU COPIA EN RECEPCIÓN</p>
            <p>PRECIO DE VENTA 6€</p>
            <p>Y LA MÚSICA</p>
            <button>CONFIRMAR Y RECOGER</button>
        <div className="flex flex-row text-center justify-center">
            <button>COMENZAR DE NUEVO</button>
        </div>
    </div>
  );
};

export default Enviar;
