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
 

  const handleSeguirClick = () => {
    setComponenteActual("yahora");
  };

  return (
    <div className="flex flex-col text-center justify-center align-center py-24   mb-20 mt-10 pb-24 pt-14">
      <div className="flex flex-col text-center px-24 ">
        <div className="flex flex-row text-5xl pb-1 justify-center">
          <h1>HOLA,</h1>
          <div className="flex flex-col border-b border-gray-400 mb-2 justify-end mx-5 px-5 ">
            <h2 className="text-4xl ">{nombre}</h2>
          </div>
        </div>
        <p className="text-black text-lg ">HE AQUÍ TODOS LOS DIOSES ROMANOS</p>
        <div className="flex flex-col">
          <div className="flex flex-row  ">
            <div className="flex flex-col justify-center text-center px-12 py-1">
            <Image
                src="/DEUSPOMPEIA/JUPITER.png"
                alt="jupiter"
                width={95}
                height={95}
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>JUPITER</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/BACO.png"
                alt="BACO"
                width={80}
                height={80}
                 
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>BACO</p>
            </div>
            {/* Add "layout" property and CSS styles to other Image components similarly */}
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/MARTE.png"
                alt="marte"
                width={82}
                height={82}
                 
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>MARTE</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/VULCANO.png"
                alt="VULCANO"
                width={90}
                height={90}
                 
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>VULCANO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/VENUS.png"
                alt="VENUS"
                width={80}
                height={80}
                 
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>VENUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/CERES.png"
                alt="ceres"
                width={105}
                height={105}
                 
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>CERES</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/DIANA.png"
                alt="diana"
                width={87}
                height={87}
                 
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>DIANA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/PLUTON.png"
                alt="PLUTON"
                width={95}
                height={95}
                 
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              />
              <p>PLUTÓN</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/FEBO.png"
                alt="febo"
                width={93}
                height={93}
                  
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio

              />
              <p>FEBO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/MINERVA.png"
                alt="MINERVA"
                width={80}
                height={80}
                  
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio

              />
              <p>MINERVA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/MERCURIO.png"
                alt="MERCURIO"
                width={95}
                height={95}
                  
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio

              />
              <p>MERCURIO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/DEUSPOMPEIA/NEPTUNO.png"
                alt="NEPTUNO"
                width={105}
                height={105}
                  
                style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio

              />
              <p>NEPTUNO</p>
            </div>
          </div>
         </div>
      </div>
      <div className="mt-1">
        <p className="text-black text-lg">
          ¿CUÁL DE ELLOS TE REPRESENTA MEJOR?
        </p>
        <p className="text-black text-lg">
          ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS...
        </p>
      </div>
      <div className="mx-20">
        <button
          className="mt-2 px-6 py-1   text-lg text-black bg-cyan-700 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
          ¡SAPERE AUDE!
        </button>
      </div>
    </div>
  );
};

export default Nombrehola;
