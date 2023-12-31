import React, { useState } from "react";
import Image from "next/image";
import Restartbutton from "./../../Restartbutton";

interface NombreholaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  nombre: String;
}

const Nombrehola: React.FC<NombreholaProps> = ({
  setComponenteActual,
  nombre,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSeguirClick = () => {
    setComponenteActual("conflicto");
  };

  return (
    <div className="flex flex-col text-center justify-start align-center px-10 mb-24">
      <div className="flex flex-col text-center px-20  ">
        <div className="flex flex-row text-6xl   justify-center">
          <h1>GREETINGS, {nombre}</h1>
        </div>
        <p className="text-black text-3xl ">MEET THE ROMAN GODS</p>

        <div className="flex flex-col justify-center items-center text-center  ">
          <Image src="/Stickers.png" alt="Gods" width={600} height={600} />
        </div>
      </div>
      <div>
        <p className="text-black text-3xl">
          ¿WHICH OF THEM MATCHES BEST WITH YOUR PERSONALITY?
        </p>
        <p className="text-black text-3xl">
          ¡DARE TO KNOW! OR AS ROMANS WOULD SAY... ¡SAPERE AUDE!
          </p>
      </div>
      <div className="flex flex-row mt-5 justify-center text-center align-center">
          <button
            className="mt-1 px-8 py-4    text-4xl shadow-lg text-black bg-cyan-200 rounded bg-opacity-40"
            onClick={handleSeguirClick}
          >
          START{" "}
          </button> 
      </div>
    </div>
  );
};

export default Nombrehola;
