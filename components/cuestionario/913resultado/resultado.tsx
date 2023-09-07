import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Contenido from "../../../lib/slogans.json";
import { useSpring, animated } from "react-spring";
import Selectdios from "../../Selectdios";

interface ResultadoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setmidios: React.Dispatch<React.SetStateAction<string>>;
  nombre: string;
  conflicto: string;
  relaciones: string;
  estrategia: string;
  resolutividad: string;
  trabajo: string;
  lugar: string;
  humor: string;
  creatividad: string;
  juicio: string;
  horario: string;
}

const Resultado: React.FC<ResultadoProps> = ({
  setComponenteActual,
  setmidios,
  nombre,
  conflicto,
  relaciones,
  estrategia,
  resolutividad,
  trabajo,
  lugar,
  humor,
  creatividad,
  juicio,
  horario,
}) => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  
  const springAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 500 },
    onRest: () => {
      if (!isVisible) {
        setIsVisible(true);
      }
    },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tuDios = Selectdios({
    criterios: [
      conflicto,
      relaciones,
      estrategia,
      resolutividad,
      trabajo,
      lugar,
      humor,
      creatividad,
      juicio,
      horario,
    ],
  });

  const handleSeguirClick = () => {
    setmidios(tuDios);
    setComponenteActual("enviar");
  };

  const handleRestart = () => {
    router.push("/landing");
  };

  const imagendios = `/DEUSPOMPEIA/${tuDios}.png`;

  return (
    <animated.div
      className="flex flex-col mb-10 text-center justify-center p-24  w-screen"
      style={springAnimation}
    >
      <div className="mt-14 pt-8 px-20">
        <div className="flex flex-row text-left justify-center align-center  px-20 pr-24 mx-14 ">
          <div className="flex-1 flex flex-col ml-16 pt-10">
            <div className="pl-24 ml-14">
              <h1 className="text-7xl mt-10 ">{nombre}</h1>
              <p className="text-black text-2xl mt-2 mb-16   text-black">
                TU DIOS ES
              </p>
              <h2 className="text-black  text-7xl  mb-5   ">{tuDios}</h2>
              <div className="text-black">
                <div className="text-2xl mb-10 pr-5">{Contenido[tuDios]}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center ">
            <Image
              src={imagendios}
              alt={tuDios}
              width={400}
              height={400}
              style={{ width: "auto", height: "auto" }}
              className="px-20"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center px-24 mx-16">
          <div className="flex-1 mr-24">
            <button
              className="mt-2 px-8 py-4 shadow-lg text-3xl text-black bg-cyan-700 rounded bg-opacity-40 mr-4"
              onClick={handleSeguirClick}
            >
              IMPRIMIR
            </button>
          </div>
          <div className="flex-1">
            <button
              className="px-8 py-4 shadow-lg py-0.5 text-3xl text-black bg-cyan-700 rounded bg-opacity-40 ml-4 mt-2"
              onClick={handleRestart}
            >
              FINALIZAR SIN IMPRIMIR
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Resultado;
