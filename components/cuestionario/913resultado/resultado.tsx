import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Contenido from "../../../lib/slogans.json";
import { useSpring, animated } from "react-spring";

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

function SeleccionarDios({ criterios }: { criterios: string[] }) {
  if (criterios[0] == "PACÍFICO") {
    if (criterios[1] == "ENAMORADIZO") {
      if (criterios[2] == "ESTRATEGA") {
        return "JUPITER";
      } else {
        if (criterios[9] == "DIURNO") {
          return "FEBO";
        } else {
          return "VENUS";
        }
      }
    } else {
      if (criterios[5] == "CAMPO") {
        if (criterios[4] == "TRABAJADOR") {
          if (criterios[7] == "CREATIVO") {
            return "VULCANO";
          } else {
            return "CERES";
          }
        } else {
          return "MERCURIO";
        }
      } else {
        if (criterios[3] == "CONFRONTACIÓN") {
          return "JUNO";
        } else {
          return "VESTA";
        }
      }
    }
  } else {
    if (criterios[1] == "ENAMORADIZO") {
      if (criterios[2] == "CAMPO") {
        return "NEPTUNO";
      } else {
        return "MARTE";
      }
    } else {
      if (criterios[2] == "ESTRATEGA") {
        return "MINERVA";
      } else {
        return "DIANA";
      }
    }
  }
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

  // State to manage the visibility of the component
  const [isVisible, setIsVisible] = useState(false);

  // Configuring the spring animation
  const springAnimation = useSpring({
    opacity: isVisible ? 1 : 0, // Set the opacity to 1 when isVisible is true, otherwise 0
    config: { duration: 1000 }, // Duration of 1 second
    onRest: () => {
      // After the animation ends, set isVisible to true to display the content
      if (!isVisible) {
        setIsVisible(true);
      }
    },
  });

  useEffect(() => {
    // Once the component is mounted, set isVisible to true to start the animation
    setIsVisible(true);
  }, []);

  const tuDios = SeleccionarDios({
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

  const imagendios = `/dioses/${tuDios}.png`;

  return (
    <animated.div
      className="flex flex-col mb-20 text-center justify-center"
      style={springAnimation} // Apply the spring animation style to the component
    >
      <h1 className="text-6xl mt-10 ">{nombre}</h1>
      <p className="text-black text-xs mt-2">TU DIOS ES</p>
      <div className="flex flex-row" style={{ height: "30" }}>
        <div
          className="flex flex-col items-center pr-20 pt-5"
          style={{ flex: 2 }}
        >
          <Image src={imagendios} alt={tuDios} width={140} height={140} />
          <button
            className="mt-2 px-6 py-0.5 text-md text-black bg-cyan-700 rounded bg-opacity-40"
            onClick={handleSeguirClick}
          >
            IMPRIMIR
          </button>
        </div>
        <div className="flex flex-col pt-5 text-black" style={{ flex: 4 }}>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl mt-10 mb-2">{tuDios}</h2>
            <div className="text-md mb-1">{Contenido[tuDios]}</div>
          </div>
          <div className="mt-7">
            <button
              className="px-6 py-0.5 mt-3 text-md text-black bg-cyan-700 rounded bg-opacity-40"
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