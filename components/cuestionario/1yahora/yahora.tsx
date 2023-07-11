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
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center">
        <Image src="/romanohablando.png" alt="romano" width={150} height={150} />
      </div>
      <h1 className="text-3xl my-3">Y AHORA UN PEQUEÑO CUESTIONARIO...</h1>
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