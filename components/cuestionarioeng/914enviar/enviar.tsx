import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Restartbutton from "./../../Restartbutton";

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
    let lang = "en"
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

  

  return (
    <div className="flex flex-col text-center  items-center  mb-24">
    <p className="mb-7 text-black text-4xl">
      DO YOU WANT TO TAKE YOUR GOD AS A SOUVENIR?
      </p>
      <Image src="/PortfolioDiseño.png" alt="PortfolioDiseño" width={600} height={600} />

      <p className="mt-6 text-black text-3xl">ASK FOR YOUR COPY AT RECEPTION</p>
      <p className="mt-2 text-black text-2xl">SELLING PRICE 6€</p>

      <div className="flex flex-row text-center justify-center">
        <button
          className="mt-11 px-8 py-4 mr-10 text-3xl text-black bg-cyan-700 rounded bg-opacity-40 shadow-lg"
          onClick={handleSeguirClick}
        >
          CONFIRM AND PRINT
        </button>
        <button
          className="mt-11 px-8 py-4 text-3xl text-black bg-green-700  rounded bg-opacity-30  shadow-lg"
          onClick={handleRestart}
        >
          START AGAIN
        </button>
      </div> 
    </div>
  );
};

export default Enviar;
