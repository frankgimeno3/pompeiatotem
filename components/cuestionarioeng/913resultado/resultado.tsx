import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Contenido from "../../../lib/sloganseng.json"
import { useSpring, animated } from "react-spring";
import Restartbutton from "./../../Restartbutton";

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
      className="flex flex-col mb-10 text-center justify-center p-24  w-screen"
      style={springAnimation} // Apply the spring animation style to the component
    >
      <div className="mt-14 pt-8 border border-red-400 px-20">
        <div className="flex flex-row text-left justify-center align-center  px-20 pr-24 mx-14 py- border border-green-500">
          

          <div className="flex-1 flex flex-col border border-blue-400 ml-10 pt-10">
            <h1 className="text-7xl mt-10 ">{nombre}</h1>
            <p className="text-black text-2xl mt-2 mb-20   text-black">YOUR GOD IS</p>
            <h2 className="text-black  text-7xl  mb-5   ">{tuDios}</h2>
            <div className="text-black">
              <div className="text-2xl mb-10 pr-5">{Contenido[tuDios]}</div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center  border border-black">
            <Image
              src={imagendios}
              alt={tuDios}
              width={400}
              height={400}
              style={{ width: "auto", height: "auto" }} // Add CSS styles to maintain aspect ratio
              className="px-20"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center px-24 mx-16">
          <div className="flex-1 ml-5">
            <button
              className="mt-2 px-8 py-4 shadow-lg text-3xl text-black bg-cyan-700 rounded bg-opacity-40 mr-4"
              onClick={handleSeguirClick}
            >
              PRINT
            </button>
          </div>
          <div className="flex-1">
            <button
              className="px-8 py-4 shadow-lg mt-3 text-3xl text-black bg-cyan-700 rounded bg-opacity-40 ml-4"
              onClick={handleRestart}
            >
              FINISH WITHOUT PRINTING
            </button>
          </div>
        </div>
        <button className="mt-3 ml-3">
            <Restartbutton />
          </button>
      </div>
    </animated.div>
  );
};

export default Resultado;
