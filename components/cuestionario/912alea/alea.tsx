import React, { useState, useEffect } from "react";

interface AleaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Alea: React.FC<AleaProps> = ({ setComponenteActual }) => {
 
 

  const handleSeguirClick = () => {

      setComponenteActual("resultado");
  };

  return (
    <div className="flex flex-col text-center justify-center">
     <h2>¡ALEA IACTA EST!</h2>
     <h2>¡LA SUERTE ESTÁ ECHADA!</h2>

     <div className="mx-20">
        <button
          className="mt-2 px-6 py-1   text-md text-black bg-cyan-700 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
          SEGUIR
        </button>
      </div>
   </div>
  );
};

export default Alea;