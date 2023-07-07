import React, { useState } from "react";
import Nombre from "../../../components/cuestionario/1nombre/nombre";
import Conflicto from "../../../components/cuestionario/2conflicto/conflicto";
import Relaciones from "../../../components/cuestionario/3relaciones/relaciones";
import Estrategia from "../../../components/cuestionario/4estrategia/estrategia";
import Resolutividad from "../../../components/cuestionario/5resolutividad/resolutividad";
import Trabajo from "../../../components/cuestionario/6trabajo/trabajo";
import Lugar from "../../../components/cuestionario/7lugar/lugar";
import Humor from "../../../components/cuestionario/8humor/humor";
import Creatividad from "../../../components/cuestionario/9creatividad/creatividad";
import Juicio from "../../../components/cuestionario/910juicio/juicio";
import Horario from "../../../components/cuestionario/911horario/horario";

const Cuestionario = () => {
  const [componenteactual, setComponenteActual] = useState("nombre");  
  const [nombre, setNombre] = useState("");
  const [conflicto, setConflicto] = useState("");
  const [relaciones, setRelaciones] = useState("");
  const [estrategia, setEstrategia] = useState("");
  const [resolutividad, setResolutividad] = useState("");
  const [trabajo, setTrabajo] = useState("");
  const [lugar, setLugar] = useState("");
  const [humor, setHumor] = useState("");
  const [creatividad, setCreatividad] = useState("");
  const [juicio, setJuicio] = useState("");
  const [horario, setHorario] = useState("");
  const renderComponenteActual = () => {

    switch (componenteactual) {
      case "nombre":
        return <Nombre />;
      case "conflicto":
        return <Conflicto />;
      case "relaciones":
        return <Relaciones />;
      case "estrategia":
        return <Estrategia />;
      case "resolutividad":
        return <Resolutividad />;
      case "trabajo":
        return <Trabajo />;
      case "lugar":
        return <Lugar />;
      case "humor":
        return <Humor />;
      case "creatividad":
        return <Creatividad />;
      case "juicio":
        return <Juicio />;
      case "horario":
        return <Horario />;
      default:
        return null; 
    }
  };

  return (
    <div className="h-screen flex py-20 justify-center text-center">
      {renderComponenteActual()}
    </div>
  );
};

export default Cuestionario;


