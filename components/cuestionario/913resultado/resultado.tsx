import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


interface ResultadoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
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
  if(criterios[0]== "PACÍFICO"){
    if(criterios[1]=="ENAMORADIZO"){
      if(criterios[2]=="ESTRATEGA"){
        return "JÚPITER"
      } else{
        if(criterios[9]=="DIURNO"){
          return "FEBOS"
        } else {
          return "VENUS"
        }
      }
    } else {
      if (criterios[5]=="CAMPO"){
        if (criterios[4]=="TRABAJADOR"){
          if(criterios[7]=="CREATIVO"){
            return "VULCANO"
          } else{
            return "CERES"
          }
        } else {
          return "MERCURIO"
        }
      } else {
        if (criterios[3]=="CONFRONTACIÓN"){
          return "JUNO"
        } else {
          return "VESTA"
        }
      }
    }
  } else {
    if(criterios[1]=="ENAMORADIZO"){
      if (criterios[2]=="CAMPO"){
        return "NEPTUNO"
      } else {
        return "MARTE"
      }
    } else {
      if(criterios[2]=="ESTRATEGA"){
        return "MINERVA"
      } else {
        return "DIANA"
        
      }
    }
  }
}

const Resultado: React.FC<ResultadoProps> = ({
  setComponenteActual,
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
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();

  const handleSeguirClick = () => {
    setComponenteActual("enviar");
  };

  const handleRestart = () => {
    router.push("/landing");
  };

  const tuDios = SeleccionarDios({
    criterios: [conflicto, relaciones, estrategia, resolutividad, trabajo, lugar, humor, creatividad, juicio, horario],
  });

  return (
    <div className="flex flex-col text-center justify-center">
      <h1>{nombre}</h1>
      <p>TU DIOS ES</p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>Imagen</p>
          <button onClick={handleSeguirClick}>IMPRIMIR</button>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex flex-col p-2">
            <h2>{tuDios}</h2>
            <p>DIOS DE LA BELLEZA,</p>
            <p>LAS ARTES PLÁSTICAS</p>
            <p>Y LA MÚSICA</p>
          </div>
          <button onClick={handleRestart}>REINICIAR</button>
        </div>
      </div>
    </div>
  );
};

export default Resultado;