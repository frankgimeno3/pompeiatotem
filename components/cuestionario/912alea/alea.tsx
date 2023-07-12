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

     <button
       className="mt-2 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
       onClick={handleSeguirClick}
     >
       VER
     </button>
   </div>
  );
};

export default Alea;