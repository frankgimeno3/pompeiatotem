import React, { useEffect } from "react";

interface ConflictoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}
const Conflicto: React.FC<ConflictoProps> = ({ setComponenteActual }) => {
  
  const handleSeguirClick = () => {
    setComponenteActual("relaciones");
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h2>EN UNA SITUACION DE CONFLICTO SOY:</h2>
      <div className="flex flex-row justify-center my-5">
        <button className="mr-10">PACÍFICO</button>
        <button className="ml-10">GUERRERO</button>
      </div>
      <button
              className="mt-2 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
              onClick={handleSeguirClick}
      >SEGUIR</button>
    </div>
  );
};

export default Conflicto;
