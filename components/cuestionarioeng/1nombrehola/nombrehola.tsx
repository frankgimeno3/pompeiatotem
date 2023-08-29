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
    <div className="flex flex-col text-center justify-start align-center pt-16 px-10  ">
      <div className="flex flex-col text-center px-20    pt-2 ">
        <div className="flex flex-row text-5xl   justify-center">
          <h1>GREETINGS, {nombre}</h1>
        </div>
        <p className="text-black text-lg ">MEET THE ROMAN GODS</p>
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
              <p>BACCHUS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 border  ">
              <Image
                src="/DEUSPOMPEIAENG/MARS.png"
                alt="MARS"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
              />
              <p>MARS</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/VULCAN.png"
                alt="VULCAN"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
              />
              <p>VULCAN</p>
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
              <p>PLUTO</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/PHOEBUS.png"
                alt="PHOEBUS"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
              />
              <p>PHOEBUS</p>
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
              <p>MERCURY</p>
            </div>
            <div className="flex flex-col justify-center text-center px-8 ">
              <Image
                src="/DEUSPOMPEIAENG/NEPTUNE.png"
                alt="NEPTUNE"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
              />
              <p>NEPTUNE</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-black text-lg">
          ¿WHICH OF THEM MATCHES BEST WITH YOUR PERSONALITY?
        </p>
        <p className="text-black text-lg">
          ¡DARE TO KNOW! OR AS ROMANS WOULD SAY... <span className="font-bold">¡SAPERE AUDE! </span>
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
