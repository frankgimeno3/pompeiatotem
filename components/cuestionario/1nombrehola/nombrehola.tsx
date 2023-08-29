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
    <div className="flex flex-col text-center justify-start align-center pt-16 px-10  ">
      <div className="flex flex-col text-center px-20    pt-2 ">
        <div className="flex flex-row text-5xl   justify-center">
          <h1>SALUDOS,</h1>
          <div className="flex flex-col border-b border-gray-400 mb-2 justify-end mx-5 px-5 ">
            <h2 className="text-4xl ">{nombre}</h2>
          </div>
        </div>
        <p className="text-black text-lg ">HE AQUÍ TODOS LOS DIOSES ROMANOS</p>
        <div className="flex flex-col justify-end">
          <div className="flex flex-row  py-2 ">
            <div className="flex flex-col justify-center text-center px-8  ">
                <Image
                src="/DEUSPOMPEIAENG/JUPITER.png"
                alt="jupiter"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

                />
               <p>JUPITER</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/BACCHUS.png"
                alt="BACCHUS"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>BACO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 border  ">
              <Image
                src="/DEUSPOMPEIAENG/MARS.png"
                alt="MARS"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>MARTE</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/VULCAN.png"
                alt="VULCAN"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>VULCANO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/VENUS.png"
                alt="VENUS"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>VENUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/CERES.png"
                alt="ceres"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>CERES</p>
            </div>
          </div>
          <div className="flex flex-row   py-2">
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/DIANA.png"
                alt="DIANA"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>DIANA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/PLUTO.png"
                alt="PLUTO"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>PLUTÓN</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/PHOEBUS.png"
                alt="PHOEBUS"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>FEBO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/MINERVA.png"
                alt="MINERVA"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>MINERVA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/MERCURY.png"
                alt="MERCURY"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}

              />
              <p>MERCURIO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/NEPTUNE.png"
                alt="NEPTUNE"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
              />
              <p>NEPTUNO</p>
            </div>
          </div>
         </div>
      </div>
      <div  >
      <p className="text-black text-lg">
          ¿CUÁL DE ELLOS TE REPRESENTA MEJOR?
        </p>
        <p className="text-black text-lg">
          ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS...
        </p>
      </div>
      <div className="mx-20">
        <button
          className="mt-2 px-6    text-lg text-black bg-cyan-200 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
  ¡SAPERE AUDE!        </button>
      </div>
    </div>
  );
};

export default Nombrehola;




 