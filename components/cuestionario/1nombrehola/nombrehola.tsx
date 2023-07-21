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
    setComponenteActual("yahora");
  };

  return (
    <div className="flex flex-col text-center justify-center align-center pb-14">
      <div className="flex flex-col text-center ">
        <div className="flex flex-row text-7xl pb-1 justify-center">
          <h1>HOLA,</h1>
          <div className="flex flex-col border-b border-gray-400 mb-2 justify-end mx-5 px-5 ">
            <h2 className="text-5xl ">{nombre}</h2>
          </div>
        </div>
        <p className="text-black text-lg ">HE AQUÍ TODOS LOS DIOSES ROMANOS</p>
        <div className="flex flex-col">
          <div className="flex flex-row  ">
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/JUPITER.png"
                alt="jupiter"
                width={95}
                height={95}
              />
              <p>JUPITER</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/JUNO.png"
                alt="midiosfoto"
                width={83}
                height={83}
              />
              <p>JUNO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/MARTE.png"
                alt="marte"
                width={99}
                height={99}
              />
              <p>MARTE</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/VESTA.png"
                alt="VESTA"
                width={90}
                height={90}
              />
              <p>VESTA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/AFRODITA.png"
                alt="afrodita"
                width={80}
                height={80}
              />
              <p>AFRODITA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/CERES.png"
                alt="ceres"
                width={105}
                height={105}
              />
              <p>CERES</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/DIANA.png"
                alt="diana"
                width={87}
                height={87}
              />
              <p>DIANA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/EFESTO.png"
                alt="efesto"
                width={95}
                height={95}
              />
              <p>EFESTO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/FEBO.png"
                alt="febo"
                width={93}
                height={93}
              />
              <p>FEBO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/MINERVA.png"
                alt="MINERVA"
                width={80}
                height={80}
              />
              <p>MINERVA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/MERCURIO.png"
                alt="MERCURIO"
                width={95}
                height={95}
              />
              <p>MERCURIO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/dioses/NEPTUNO.png"
                alt="NEPTUNO"
                width={105}
                height={105}
              />
              <p>NEPTUNO</p>
            </div>
          </div>
         </div>
      </div>
      <div className="mt-5">
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
