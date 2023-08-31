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
    <div className="flex flex-col text-center justify-start align-center pt-16 px-10  ">
    <div className="flex flex-col text-center px-20   pt-6 ">
      <div className="flex flex-row text-6xl   justify-center">
          <h1>GREETINGS, {nombre}</h1>
        </div>
        <p className="text-black text-2xl ">MEET THE ROMAN GODS</p>

        <div className="flex flex-col justify-center text-center">
          <Image src="/Stickers.png" alt="Gods" width={600} height={600} />
        </div>
      </div>
      <div>
        <p className="text-black text-2xl">
          ¿WHICH OF THEM MATCHES BEST WITH YOUR PERSONALITY?
        </p>
        <p className="text-black text-2xl">
          ¡DARE TO KNOW! OR AS ROMANS WOULD SAY... ¡SAPERE AUDE!
          </p>
      </div>
      <div className="flex flex-row mt-5 justify-center text-center align-center">
          <button
            className="mt-2 px-8 py-4    text-3xl shadow-lg text-black bg-cyan-200 rounded bg-opacity-40"
            onClick={handleSeguirClick}
          >
          START{" "}
          </button>
          <button className="mt-3 ml-3">
            <Restartbutton />
          </button>
      </div>
    </div>
  );
};

export default Nombrehola;
