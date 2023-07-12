import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface EnviarProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Enviar: React.FC<EnviarProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSeguirClick = () => {
    if (!selectedOption) {
      setShowErrorMessage(true);
    } else {
      setComponenteActual("yapuedes");
    }
  };

  const handleRestart = () => {
    router.push("/landing");
  };

  return (
    <div className="flex flex-col text-center  items-center justify-center">
      <p className="mb-8 text-black">
        ¿QUIERES LLEVARTE A TU DIOS DE RECUERDO?
      </p>
      <Image src="/miniatura.png" alt="miniatura" width={120} height={120} />

      <p className="mt-6 text-black text-xs">PIDE TU COPIA EN RECEPCIÓN</p>
      <p className="mt-2 text-black text-xs">PRECIO DE VENTA 6€</p>

      <div className="flex flex-row text-center justify-center">
        <button
          className="mt-11 px-2 py-1 mr-10 text-xs text-black bg-cyan-600  rounded opacity-75 "
          onClick={handleSeguirClick}
        >
          CONFIRMAR Y RECOGER
        </button>
        <button
          className="mt-11 px-2 py-1 text-xs text-black bg-green-600  rounded opacity-50 "
          onClick={handleRestart}
        >
          COMENZAR DE NUEVO
        </button>
      </div>
    </div>
  );
};

export default Enviar;
