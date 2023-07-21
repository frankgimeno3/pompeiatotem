import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface EnviarProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  midios: string;
  nombre: string;

}

const Enviar: React.FC<EnviarProps> = ({ setComponenteActual, nombre, midios }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();
 

  const handleSeguirClick = () => {
    fetch("http://localhost:5000/files/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, midios }),
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

  

  return (
    <div className="flex flex-col text-center  items-center justify-center">
      <p className="mb-8 text-black text-xl">
        ¿QUIERES LLEVARTE A TU DIOS DE RECUERDO?
      </p>
      <Image src="/miniatura.png" alt="miniatura" width={250} height={250} />

      <p className="mt-6 text-black text-lg">PIDE TU COPIA EN RECEPCIÓN</p>
      <p className="mt-2 text-black text-lg">PRECIO DE VENTA 6€</p>

      <div className="flex flex-row text-center justify-center">
        <button
          className="mt-11 px-2 py-1 mr-10 text-lg text-black bg-cyan-700 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
          CONFIRMAR Y RECOGER
        </button>
        <button
          className="mt-11 px-2 py-1 text-lg text-black bg-green-700  rounded bg-opacity-30 "
          onClick={handleRestart}
        >
          COMENZAR DE NUEVO
        </button>
      </div>
    </div>
  );
};

export default Enviar;
