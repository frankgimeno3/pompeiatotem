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
        <p className="text-black text-lg ">HERE, THE ROMAN GODS</p>
        <div className="flex flex-col">
          <div className="flex flex-row  ">
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/JUPITER.png"
                alt="jupiter"
                width={95}
                height={95}
              />
              <p>JUPITER</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/JUNO.png"
                alt="midiosfoto"
                width={83}
                height={83}
              />
              <p>JUNO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/MARS.png"
                alt="MARS"
                width={99}
                height={99}
              />
              <p>MARS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/VESTA.png"
                alt="VESTA"
                width={90}
                height={90}
              />
              <p>VESTA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/VENUS.png"
                alt="VENUS"
                width={80}
                height={80}
              />
              <p>VENUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/CERES.png"
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
                src="/gods/DIANA.png"
                alt="diana"
                width={87}
                height={87}
              />
              <p>DIANA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/VULCAN.png"
                alt="VULCAN"
                width={95}
                height={95}
              />
              <p>VULCAN</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/PHOEBUS.png"
                alt="PHOEBUS"
                width={93}
                height={93}
              />
              <p>PHOEBUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/MINERVA.png"
                alt="MINERVA"
                width={80}
                height={80}
              />
              <p>MINERVA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/MERCURY.png"
                alt="MERCURY"
                width={95}
                height={95}
              />
              <p>MERCURY</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="/gods/NEPTUNE.png"
                alt="NEPTUNE"
                width={105}
                height={105}
              />
              <p>NEPTUNE</p>
            </div>
          </div>
         </div>
      </div>
      <div className="mt-5">
      <p className="text-black text-lg">¿WHICH OF THEM MATCHES BEST WITH YOUR PERSONALITY?</p>
<p className="text-black text-lg">
¡DARE TO KNOW! OR AS ROMANS WOULD SAY...
      </p>
      </div>
      <div className="mx-20">
        <button
          className="mt-2 px-6 py-1   text-lg text-black bg-cyan-700 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
  ¡SAPERE AUDE!        </button>
      </div>
    </div>
  );
};

export default Nombrehola;


 