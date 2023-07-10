import React, { useState } from "react";
import Nombre from "../../../components/cuestionario/1nombre/nombre";
import Nombrehola from "../../../components/cuestionario/1nombrehola/nombrehola";
import Yahora from "../../../components/cuestionario/1yahora/yahora";
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
import Alea from "../../../components/cuestionario/912alea/alea";
import Resultado from "../../../components/cuestionario/913resultado/resultado";
import Enviar from "../../../components/cuestionario/914enviar/enviar";
import Yapuedes from "../../../components/cuestionario/915yapuedes/yapuedes";

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
        return <Nombre setComponenteActual={setComponenteActual} setNombre={setNombre} />
      case "nombrehola":
        return <Nombrehola setComponenteActual={setComponenteActual}/>
      case "yahora":
        return <Yahora setComponenteActual={setComponenteActual}/>
      case "conflicto":
        return <Conflicto setComponenteActual={setComponenteActual}/>;
      case "relaciones":
        return <Relaciones setComponenteActual={setComponenteActual}/>;
      case "estrategia":
        return <Estrategia setComponenteActual={setComponenteActual}/>;
      case "resolutividad":
        return <Resolutividad setComponenteActual={setComponenteActual}/>;
      case "trabajo":
        return <Trabajo setComponenteActual={setComponenteActual}/>;
      case "lugar":
        return <Lugar setComponenteActual={setComponenteActual}/>;
      case "humor":
        return <Humor setComponenteActual={setComponenteActual}/>;
      case "creatividad":
        return <Creatividad setComponenteActual={setComponenteActual}/>;
      case "juicio":
        return <Juicio setComponenteActual={setComponenteActual}/>;
      case "horario":
        return <Horario setComponenteActual={setComponenteActual}/>;
      case "alea":
        return <Alea setComponenteActual={setComponenteActual}/>;   
      case "resultado":
        return <Resultado setComponenteActual={setComponenteActual}/>;   
        case "enviar":
          return <Enviar setComponenteActual={setComponenteActual}/>; 
          case "yapuedes":
            return <Yapuedes setComponenteActual={setComponenteActual}/>;        
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