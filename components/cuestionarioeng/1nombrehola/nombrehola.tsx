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
    <div className="flex flex-col text-center justify-center align-center pb-14 px-24 mb-6">
      <div className="flex flex-col text-center px-24">
        <div className="flex flex-row text-5xl   justify-center">
          <h1>GREETINGS,</h1>
          <div className="flex flex-col border-b border-gray-400 mb-2 justify-end mx-5 px-5 ">
            <h2 className="text-4xl ">{nombre}</h2>
          </div>
        </div>
        <p className="text-black text-lg ">HERE, THE ROMAN GODS</p>
        <div className="flex flex-col">
          <div className="flex flex-row  ">
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/JUPITER.png"
                alt="jupiter"
                width={95}
                height={95}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>JUPITER</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/BACUS.png"
                alt="BACUS"
                width={83}
                height={83}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>BACUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/MARS.png"
                alt="MARS"
                width={99}
                height={99}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>MARS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/VULCAN.png"
                alt="VULCAN"
                width={90}
                height={90}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>VULCAN</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/VENUS.png"
                alt="VENUS"
                width={80}
                height={80}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>VENUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/CERES.png"
                alt="ceres"
                width={105}
                height={105}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>CERES</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/DIANA.png"
                alt="DIANA"
                width={87}
                height={87}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>DIANA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/PLUTO.png"
                alt="PLUTO"
                width={95}
                height={95}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>PLUTO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/PHOEBUS.png"
                alt="PHOEBUS"
                width={93}
                height={93}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>PHOEBUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/MINERVA.png"
                alt="MINERVA"
                width={80}
                height={80}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>MINERVA</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/MERCURY.png"
                alt="MERCURY"
                width={95}
                height={95}
                   style={{ width: "auto", height: "auto" }} 
              />
              <p>MERCURY</p>
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-1">
              <Image
                src="//DEUSPOMPEIAENG/NEPTUNE.png"
                alt="NEPTUNE"
                width={105}
                height={105}
                   style={{ width: "auto", height: "auto" }} 
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


 