import React, { useState, useEffect } from "react";

interface RelacionesProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setRelaciones: React.Dispatch<React.SetStateAction<string>>;
}

const Relaciones: React.FC<RelacionesProps> = ({
  setComponenteActual,
  setRelaciones,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setRelaciones(selectedOption);
    setComponenteActual("estrategia");
  };
 
   return (
    <div className="flex flex-col text-center justify-center">
      <h2 className="text-black text-xl">IN LOVE AFFAIRS I AM:</h2>
      <div className="flex flex-row justify-center my-10 text-5xl ">
        <button
          className={`mr-10 px-5 py-2 ${
            selectedOption === "ENAMORADIZO"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("ENAMORADIZO")}
        >
          PROMISCUOUS
        </button>
        <button
          className={`ml-10 px-5 py-2 ${
            selectedOption === "FIEL"
              ? "bg-white bg-opacity-40 rounded-full"
              : ""
          }`}
          onClick={() => handleOptionClick("FIEL")}
        >
          MONOGAMOUS
        </button>
      </div>
 
    </div>
  );
};

export default Relaciones;
