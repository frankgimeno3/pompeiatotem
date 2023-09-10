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

const Enviar: React.FC<EnviarProps> = ({ setComponenteActual, nombre, midios }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();
  let lang = "es"
  const [botonPulsado, setBotonPulsado] = useState(false); // Estado botonPulsado inicializado en false

  const handleSeguirClick = () => {
    setBotonPulsado(true)
    
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


  return (
    <div className="flex flex-col text-center  items-center  mb-24 ">
      <p className="mb-7 text-black text-4xl">
        ¿QUIERES LLEVARTE A TU DIOS DE RECUERDO?
      </p>
      <Image src="/PortfolioDiseño.png" alt="PortfolioDiseño" width={600} height={600} />

      <p className="mt-6 text-black text-3xl">PIDE TU COPIA EN RECEPCIÓN</p>
      <p className="mt-2 text-black text-2xl">PRECIO DE VENTA 5€</p>

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
