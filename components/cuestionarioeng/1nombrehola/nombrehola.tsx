import React, { useState } from "react";
import Image from "next/image";

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
    <div className="flex flex-col text-center justify-start align-center pt-16 px-10  ">
      <div className="flex flex-col text-center px-20    pt-2 ">
        <div className="flex flex-row text-5xl   justify-center">
          <h1>GREETINGS, {nombre}</h1>
        </div>
        <p className="text-black text-lg ">MEET THE ROMAN GODS</p>

        <div className="flex flex-col justify-center text-center">
          <Image src="/Stickers.png" alt="Gods" width={500} height={500} />
        </div>
      </div>
      <div>
        <p className="text-black text-lg">
          ¿WHICH OF THEM MATCHES BEST WITH YOUR PERSONALITY?
        </p>
        <p className="text-black text-lg">
          ¡DARE TO KNOW! OR AS ROMANS WOULD SAY... ¡SAPERE AUDE!
        </p>
      </div>
      <div className="mx-20">
        <button
          className="mt-2 px-6    text-lg text-black bg-cyan-200 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
          START{" "}
        </button>
      </div>
    </div>
  );
};

export default Nombrehola;
