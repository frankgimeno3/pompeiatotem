import React, { useState, useEffect } from "react";

interface YapuedesProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Yapuedes: React.FC<YapuedesProps> = ({ setComponenteActual }) => {
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
      setComponenteActual("Yapuedes");
    }
  };

  return (
    <div className="flex flex-col text-center justify-center">
       <h1>YA PUEDES RECOGERLO!</h1>
       
       
            <p>TICK ICON</p>
       
        <div className="flex flex-row text-center justify-center">
            <button>VUELVE A JUGAR</button>
        </div>
    </div>
  );
};

export default Yapuedes;
