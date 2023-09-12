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
      "DIOSA DE LA AGRICULTURA, LA FERTILIDAD Y LAS COSECHAS, VINCULADA AL CAMPO Y LA NATURALEZA. ES CONOCIDA POR SER CARIÑOSA Y GENEROSA.",
    DIANA:
      "DIOSA DE LA CAZA, LA LUNA, LA NATURALEZA, LA CASTIDAD, Y PROTECTORA DE LOS NIÑOS. ES HABITANTE DEL BOSQUE Y CAPAZ DE HABLAR CON LOS ANIMALES.",
    FEBO: "DIOS DEL SOL,  LA BELLEZA, LAS ARTES PLÁSTICAS Y LA MÚSICA. ES CONOCIDO POR SU SABIDURÍA Y COMPETITIVIDAD.",
    JUPITER:
      "DIOS DE DIOSES. SEÑOR DEL TRUENO, PROTECTOR DE LAS LEYES Y LA JUSTICIA",
    JUNO: "SEÑORA DEL OLIMPO, PROTECTORA DEL MATRIMONIO, LA MATERNIDAD Y LA FAMILIA. ES CONOCIDA POR TENER UN CARACTER FUERTE Y SER INCONDICIONALMENTE FIEL",
    MARTE:
      "DIOS DE LA GUERRA Y PATRÓN DE LA PERFECCIÓN Y LA BELLEZA. ÉS CONOCIDO POR SER VALIENTE, IMPULSIVO Y APASIONADO.",
    MERCURIO:
      "DIOS MENSAJERO, DEL COMERCIO, LOS VIAJES Y LA ELOCUENCIA. ES CONOCIDO POR SU VERSATILIDAD Y ASTUCIA.",
    MINERVA:
      "DIOSA DE LA ESTRATEGIA, LA JUSTICIA Y LA SABIDURÍA. ES RECONOCIDA POR SU PERSONALIDAD EQUILIBRADA Y SU PERFECCIONISMO.",
    NEPTUNO:
      "DIOS DE LOS MARES Y PATRÓN DE LOS MARINEROS. ES CONOCIDO POR SU PODER, FUERZA Y HABILIDADES DENTRO Y FUERA DEL AGUA. ES APASIONADO Y ENAMORADIZO.",
    VENUS:
      "DIOSA DEL AMOR, LA FERTILIDAD Y LA BELLEZA. ES CONOCIDA POR SER ENAMORADIZA, COMPETITIVA Y SEDUCTORA. ",
    VESTA:
      "DIOSA DEL HOGAR Y LA FAMILIA. ES LA PROTECTORA DEL FUEGO DEL HOGAR Y SIMBOLIZA LA UNIÓN Y LA ESTABILIDAD EN LA VIDA FAMILIAR.",
    VULCANO:
      "DIOS DEL FUEGO Y DE LA FORJA, DE LOS ARTESANOS Y EL INGENIO. SE CARACTERIZA POR SER TRANQUILO, PACÍFICO Y TRABAJADOR.",
  };
  const imagendios = `/DEUSPOMPEIA/${midios}.png`;

  return (
    <div className="flex flex-col text-center items-center mb-24">
      <p className="mb-7 text-black text-4xl">
        ¿QUIERES LLEVARTE A TU DIOS DE RECUERDO?
      </p>
      <Image
        src="/PortfolioDiseño.png"
        alt="PortfolioDiseño"
        width={600}
        height={600}
        className="bg-white "
      />

      <p className="mt-6 text-black text-3xl">PIDE TU COPIA EN RECEPCIÓN</p>
      <p className="mt-2 text-black text-2xl">PRECIO DE VENTA 5€</p>

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
            <p className="text-black text-xs mt-2   text-black" style={{ fontSize: '8px' }}>TU DIOS ES</p>
            <h2 className="text-black  text-md  mb-5   ">{midios}</h2>
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
          CONFIRMAR Y RECOGER
        </button>
        <button
          className="mt-11 px-8 py-4 text-3xl text-black bg-green-700  rounded bg-opacity-30  shadow-lg"
          onClick={handleRestart}
        >
          COMENZAR DE NUEVO
        </button>
      </div>
    </div>
  );
};

export default Enviar;
