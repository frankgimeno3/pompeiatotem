import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface ResultadoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Resultado: React.FC<ResultadoProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();

  const handleSeguirClick = () => {
   
      setComponenteActual("enviar");
  };

  const handleRestart = () => {
    router.push("/landing");
  };
  return (
    <div className="flex flex-col text-center justify-center">
      <h1>LAURA</h1>
      <p>TU DIOS ES</p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>Imagen</p>
          <button onClick={handleSeguirClick}>IMPRIMIR</button>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2>FEBO</h2>
            <p>DIOS DE LA BELLEZA,</p>
            <p>LAS ARTES PLÁSTICAS</p>
            <p>Y LA MÚSICA</p>
          </div>
          <button onClick={handleRestart}>REINICIAR</button>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
