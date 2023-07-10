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
        return <Nombre setComponenteActual={setComponenteActual}  setNombre={setNombre} />
      case "nombrehola":
        return <Nombrehola setComponenteActual={setComponenteActual} nombre={nombre}/>
      case "yahora":
        return <Yahora setComponenteActual={setComponenteActual}  />
      case "conflicto":
        return <Conflicto setComponenteActual={setComponenteActual} setConflicto={setConflicto} />;
      case "relaciones":
        return <Relaciones setComponenteActual={setComponenteActual} setRelaciones={setRelaciones} />;
      case "estrategia":
        return <Estrategia setComponenteActual={setComponenteActual} setEstrategia={setEstrategia} />;
      case "resolutividad":
        return <Resolutividad setComponenteActual={setComponenteActual} setResolutividad={setResolutividad} />;
      case "trabajo":
        return <Trabajo setComponenteActual={setComponenteActual} setTrabajo={setTrabajo} />;
      case "lugar":
        return <Lugar setComponenteActual={setComponenteActual} setLugar={setLugar} />;
      case "humor":
        return <Humor setComponenteActual={setComponenteActual} setHumor={setHumor} />;
      case "creatividad":
        return <Creatividad setComponenteActual={setComponenteActual} setCreatividad={setCreatividad} />;
      case "juicio":
        return <Juicio setComponenteActual={setComponenteActual} setJuicio={setJuicio} />;
      case "horario":
        return <Horario setComponenteActual={setComponenteActual} setHorario={setHorario} />;
      case "alea":
        return <Alea setComponenteActual={setComponenteActual}   />;   
      case "resultado":
        return         <Resultado setComponenteActual={setComponenteActual} nombre={nombre} conflicto={conflicto} relaciones={relaciones} estrategia={estrategia} resolutividad={resolutividad} trabajo={trabajo} lugar={lugar} humor={humor} creatividad={creatividad} juicio={juicio} horario={horario}  />;

        case "enviar":
          return <Enviar setComponenteActual={setComponenteActual}   />; 
          case "yapuedes":
            return <Yapuedes setComponenteActual={setComponenteActual} />;        
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