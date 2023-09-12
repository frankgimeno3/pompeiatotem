import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Restartbutton from "./../../Restartbutton";

interface EnviarProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  midios: string;
  nombre: string;
  lang: string;
}

const Enviar: React.FC<EnviarProps> = ({
  setComponenteActual,
  nombre,
  midios,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();
  let lang = "es";
  const [botonPulsado, setBotonPulsado] = useState(false); // Estado botonPulsado inicializado en false

  const handleSeguirClick = () => {
    setBotonPulsado(true);

    fetch("https://pompeiabackend-ntha9xyjc-frankgimeno3.vercel.app/files/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, midios, lang }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          setComponenteActual("yapuedes");
        } else {
          throw new Error("Credenciales incorrectas");
        }
      })
      .catch((error) => {
        console.error("Ha ocurrido un error:", error);
      });
  };

  const handleRestart = () => {
    router.push("/landing");
  };

  useEffect(() => {
    // Este efecto se ejecutará una vez que el componente se haya renderizado
    setBotonPulsado(false); // Establece botonPulsado en false
  }, []); // El segundo argumento del useEffect es un array vacío, lo que significa que se ejecutará una vez después del montaje inicial

  const Contenido = {
    CERES:
      "GODDESS OF AGRICULTURE, FERTILITY, AND HARVESTS, CONNECTED TO THE COUNTRYSIDE AND NATURE. SHE IS KNOWN FOR BEING AFFECTIONATE AND GENEROUS.",
    DIANA:
      "GODDESS OF HUNTING, THE MOON, NATURE, CHASTITY, AND PROTECTOR OF CHILDREN. SHE RESIDES IN THE FOREST AND IS CAPABLE OF COMMUNICATING WITH ANIMALS.",
    PHOEBUS:
      "GOD OF THE SUN, BEAUTY, PLASTIC ARTS, AND MUSIC. HE IS KNOWN FOR HIS WISDOM AND COMPETITIVENESS.",
    JUPITER: "GOD OF GODS. LORD OF THUNDER, PROTECTOR OF LAWS AND JUSTICE.",
    JUNO: "QUEEN OF OLYMPUS, PROTECTOR OF MARRIAGE, MOTHERHOOD, AND FAMILY. SHE IS KNOWN FOR HAVING A STRONG CHARACTER AND BEING UNCONDITIONALLY FAITHFUL.",
    MARS: "GOD OF WAR AND PATRON OF PERFECTION AND BEAUTY. HE IS KNOWN FOR BEING BRAVE, IMPULSIVE, AND PASSIONATE.",
    MERCURY:
      "MESSENGER GOD, GOD OF COMMERCE, TRAVEL, AND ELOQUENCE. HE IS KNOWN FOR HIS VERSATILITY AND CUNNING.",
    MINERVA:
      "GODDESS OF STRATEGY, JUSTICE, AND WISDOM. SHE IS RECOGNIZED FOR HER BALANCED PERSONALITY AND PERFECTIONISM.",
    NEPTUNE:
      "GOD OF THE SEAS AND PATRON OF SAILORS. HE IS KNOWN FOR HIS POWER, STRENGTH, AND SKILLS WITHIN AND OUTSIDE THE WATER. HE IS PASSIONATE AND AMOROUS.",
    VENUS:
      "GODDESS OF LOVE, FERTILITY, AND BEAUTY. SHE IS KNOWN FOR BEING AMOROUS, COMPETITIVE, AND SEDUCTIVE.",
    VESTA:
      "GODDESS OF HOME AND FAMILY. SHE IS THE PROTECTOR OF THE HEARTH FIRE AND SYMBOLIZES UNITY AND STABILITY IN FAMILY LIFE.",
    VULCAN:
      "GOD OF FIRE AND FORGE, PATRON OF CRAFTSMEN AND INGENUITY. HE IS CHARACTERIZED BY BEING CALM, PEACEFUL, AND HARDWORKING.",
  };
  const imagendios = `/DEUSPOMPEIAENG/${midios}.png`;

  return (
    <div className="flex flex-col text-center items-center mb-24">
      <p className="mb-7 text-black text-4xl">
        DO YOU WANT TO TAKE YOUR GOD AS A SOUVENIR?
      </p>
      <Image
        src="/PortfolioDiseño.png"
        alt="PortfolioDiseño"
        width={600}
        height={600}
      />

      <p className="mt-6 text-black text-3xl">
        ASK FOR YOUR COPY AT RECEPTION START AGAIN
      </p>
      <p className="mt-2 text-black text-2xl">SELLING PRICE 5€</p>

      <div
        className="mx-24 px-24 flex flex-row"
        style={{
          position: "fixed",
          top: "40%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999, // Asegura que este div esté por encima de otros componentes
          background: "transparent", // Cambia el fondo según lo necesario
          padding: "20px", // Ajusta el espacio interior según lo necesario
          borderRadius: "10px", // Añade bordes redondeados según lo necesario
        }}
      >  
        <div className="flex-1 flex flex-col ml-24  mx-24 px-10  pr-20  ">
          <div className=" text-left mx-24 px-24 ">
            <h1 className="text-md mt-10 ">{nombre}</h1>
            <p className="text-black text-xs mt-2   text-black">YOUR GOD IS</p>
            <h2 className="text-black  text-md  mb-5" style={{ fontSize: '8px' }}>{midios}</h2>
            <div className="text-black">
            <div className="text-xs mb-10 pr-5" style={{ fontSize: '8px' }}>
                {(Contenido as any)[midios]}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-24 flex flex-row"
        style={{
          position: "fixed",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999, // Asegura que este div esté por encima de otros componentes
          background: "transparent", // Cambia el fondo según lo necesario
          padding: "20px", // Ajusta el espacio interior según lo necesario
          borderRadius: "10px", // Añade bordes redondeados según lo necesario
        }}
      >
        <div className="flex-1 flex items-center justify-center mr-10 mt-10 ">
          <Image
            src={imagendios}
            alt={midios}
            width={120}
            height={120}
            style={{ width: "auto", height: "auto" }}
            className="px-20"
          />
        </div>
      </div>
      <div className="flex flex-row text-center justify-center">
        <button
          className="mt-11 px-8 py-4 mr-10 text-3xl text-black bg-cyan-700 rounded bg-opacity-40 shadow-lg"
          onClick={handleSeguirClick}
          disabled={botonPulsado}
        >
          CONFIRM AND PRINT
        </button>
        <button
          className="mt-11 px-8 py-4 text-3xl text-black bg-green-700  rounded bg-opacity-30  shadow-lg"
          onClick={handleRestart}
        >
          RESTART
        </button>
      </div>
    </div>
  );
};

export default Enviar;
