import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Contenido from "../../../lib/sloganseng.json"
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
    if (criterios[6] == "MALHUMOR" || criterios[9] == "NOCTURNO") {
      return "PLUTO";
    } else {
      if (criterios[5] == "CIUDAD") {
        if (criterios[4] == "TRABAJADOR") {
          return "VULCAN";
        } else {
          return "MERCURY";
        }
      } else {
        if (criterios[4] == "HOLGAZÁN") {
          return "BACCHUS";
        } else {
          return "CERES";
        }
      }
    }
  } else {
    if (criterios[1] == "ENAMORADIZO") {
      if (criterios[2] == "ESTRATEGA") {
        if (criterios[5] == "CIUDAD") {
          return "JUPITER";
        } else {
          return "NEPTUNE";
        }
      } else {
        if (criterios[3] == "CONFRONTACIÓN") {
          if (criterios[9] == "DIURNO") {
            return "PHOEBUS";
          } else {
            return "MARS";
          }
        } else {
          return "VENUS";
        }
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
    config: { duration: 500 }, // Duration of 1 second
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

  const handleSeguirClick = ( ) => {
    setmidios(tuDios);
    console.log("se imprime", tuDios)
     setComponenteActual("enviar");
  };

  const handleRestart = () => {
    router.push("/landing");
  };

  const imagendios = `/DEUSPOMPEIAENG/${tuDios}.png`;

  return (
    <animated.div
      className="flex flex-col mb-10 text-center justify-center p-24 mx-24 w-screen"
      style={springAnimation} // Apply the spring animation style to the component
    >
      <div className="flex flex-row text-center justify-center align-center  px-24 mx-14">
        <div className="flex-1 flex items-center justify-center pl-5">
          <Image
            src={imagendios}
            alt={tuDios}
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }} 
           />
        </div>

        <div className="flex-1 flex flex-col  align-center">
          <h1 className="text-6xl mt-10 ">{nombre}</h1>
          <p className="text-black text-lg mt-5   text-black">
          YOUR GOD IS </p>
          <h2 className="  text-4xl  mb-5   ">
            {tuDios}
          </h2>
          <div className="text-black">
            <div className="text-lg mb-10 px-10">{Contenido[tuDios]}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center px-24 mx-16">
        <div className="flex-1 ml-5">
          <button
            className="mt-2 px-6 py-0.5 text-lg text-black bg-cyan-700 rounded bg-opacity-40 mr-4"
            onClick={handleSeguirClick}
          >
          PRINT
          </button>
        </div>
        <div className="flex-1">
          <button
            className="px-6 py-0.5 mt-3 text-lg text-black bg-cyan-700 rounded bg-opacity-40 ml-4"
            onClick={handleRestart}
          >
            FINISH WITHOUT PRINTING
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Resultado;
