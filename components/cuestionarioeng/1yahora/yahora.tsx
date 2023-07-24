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
        <Image src="/romanohablando.png" alt="romano" width={200} height={200} 
           style={{ width: "auto", height: "auto" }} />
        
      </div>
      <h1 className="text-5xl mt-5">AND NOW, A BRIEF QUESTIONNAIRE...</h1>
      <button
      className="mt-10 px-6 py-1   text-lg text-black bg-cyan-700 rounded bg-opacity-40"
      onClick={handleSeguirClick}
            // eslint-disable-next-line react/no-unescaped-entities
      >LET'S GO!      </button>
    </div>
  );
};

export default Yahora;