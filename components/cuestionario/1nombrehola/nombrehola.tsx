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
  const handleSeguirClick = () => {
    setComponenteActual("conflicto");
  };

  return (
    <div className="flex flex-col text-center justify-start align-center pt-16 px-10  ">
      <div className="flex flex-col text-center px-20    pt-2 ">
        <div className="flex flex-row text-5xl   justify-center">
          <h1>SALUDOS, {nombre}</h1>
        </div>
        <p className="text-black text-lg ">HE AQUÍ TODOS LOS DIOSES ROMANOS</p>
        <div className="flex flex-col justify-center text-center  ">
          <Image src="/Stickers.png" alt="Gods" width={500} height={500} />
        </div>
      </div>
      <div>
        <p className="text-black text-lg">
          ¿CUÁL DE ELLOS TE REPRESENTA MEJOR?
        </p>
        <p className="text-black text-lg">
          ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS... ¡SAPERE AUDE!
        </p>
      </div>
      <div className="flex flex-row">
        <div className="mx-20">
          <button
            className="mt-2 px-6    text-lg text-black bg-cyan-200 rounded bg-opacity-40"
            onClick={handleSeguirClick}
          >
            EMPEZAR
          </button>
        </div>
        <div className="mx-20">
          <button className="mt-2">
            <Restartbutton />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nombrehola;
