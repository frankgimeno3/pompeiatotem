import React, { useState } from "react";
import Image from "next/image";

interface YahoraProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Yahora: React.FC<YahoraProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSeguirClick = () => {
    setComponenteActual("conflicto");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mb-20">
      <div className="flex items-center justify-center">
        <Image src="/romanohablando.png" alt="romano" width={200} height={200} />
      </div>
      <h1 className="text-5xl mt-5">Y AHORA UN PEQUEÑO CUESTIONARIO...</h1>
      <button
      className="mt-10 px-6 py-1   text-lg text-black bg-cyan-700 rounded bg-opacity-40"
      onClick={handleSeguirClick}
      >
        SÍ, VAMOS!
      </button>
    </div>
  );
};

export default Yahora;