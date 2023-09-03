 
import React, { useState, useEffect, useCallback } from "react";

import Nombre from "../../../components/cuestionarioeng/1nombre/nombre";
import Nombrehola from "../../../components/cuestionarioeng/1nombrehola/nombrehola";
import Conflicto from "../../../components/cuestionarioeng/2conflicto/conflicto";
import Relaciones from "../../../components/cuestionarioeng/3relaciones/relaciones";
import Estrategia from "../../../components/cuestionarioeng/4estrategia/estrategia";
import Resolutividad from "../../../components/cuestionarioeng/5resolutividad/resolutividad";
import Trabajo from "../../../components/cuestionarioeng/6trabajo/trabajo";
import Lugar from "../../../components/cuestionarioeng/7lugar/lugar";
import Humor from "../../../components/cuestionarioeng/8humor/humor";
import Creatividad from "../../../components/cuestionarioeng/9creatividad/creatividad";
import Juicio from "../../../components/cuestionarioeng/910juicio/juicio";
import Horario from "../../../components/cuestionarioeng/911horario/horario";
import Alea from "../../../components/cuestionarioeng/912alea/alea";
import Resultado from "../../../components/cuestionarioeng/913resultado/resultado";
import Enviar from "../../../components/cuestionarioeng/914enviar/enviar";
import Yapuedes from "../../../components/cuestionarioeng/915yapuedes/yapuedes";
import Image from "next/image";
import Restart from "../../../components/Restart";
import { useRouter } from "next/router";

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
  const [midios, setmidios] = useState("");
  const [loadingvisible, setloadingvisible] = useState(false);
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [timer, setTimer] = useState(20);
  const [ReinicioTimer, setReinicioTimer] = useState(false);  
  const router = useRouter();
  const [fondo, setFondo] = useState(`url("/fondo2.png")`);
 

  const renderComponenteActual = () => {
    while(!loadingvisible)
   
    {switch (componenteactual) {
      case "nombre":
        return (
          <Nombre
            setComponenteActual={setComponenteActual}
            setNombre={setNombre}
          />
        );
      case "nombrehola":
        return (
          <Nombrehola
            setComponenteActual={setComponenteActual}
            nombre={nombre}
          />
        );

      case "conflicto":
        return (
          <Conflicto
            setComponenteActual={setComponenteActual}
            setConflicto={setConflicto}
          />
        );
      case "relaciones":
        return (
          <Relaciones
            setComponenteActual={setComponenteActual}
            setRelaciones={setRelaciones}
          />
        );
      case "estrategia":
        return (
          <Estrategia
            setComponenteActual={setComponenteActual}
            setEstrategia={setEstrategia}
          />
        );
      case "resolutividad":
        return (
          <Resolutividad
            setComponenteActual={setComponenteActual}
            setResolutividad={setResolutividad}
          />
        );
      case "trabajo":
        return (
          <Trabajo
            setComponenteActual={setComponenteActual}
            setTrabajo={setTrabajo}
          />
        );
      case "lugar":
        return (
          <Lugar
            setComponenteActual={setComponenteActual}
            setLugar={setLugar}
          />
        );
      case "humor":
        return (
          <Humor
            setComponenteActual={setComponenteActual}
            setHumor={setHumor}
          />
        );
      case "creatividad":
        return (
          <Creatividad
            setComponenteActual={setComponenteActual}
            setCreatividad={setCreatividad}
          />
        );
      case "juicio":
        return (
          <Juicio
            setComponenteActual={setComponenteActual}
            setJuicio={setJuicio}
          />
        );
      case "horario":
        return (
          <Horario
            setComponenteActual={setComponenteActual}
            setHorario={setHorario}
          />
        );
      case "alea":
        return <Alea setComponenteActual={setComponenteActual} />;
      case "resultado":
        return (
          <Resultado
            setComponenteActual={setComponenteActual}
            setmidios={setmidios}
            nombre={nombre}
            conflicto={conflicto}
            relaciones={relaciones}
            estrategia={estrategia}
            resolutividad={resolutividad}
            trabajo={trabajo}
            lugar={lugar}
            humor={humor}
            creatividad={creatividad}
            juicio={juicio}
            horario={horario}
          />
        );

      case "enviar":
        return (
          <Enviar
            setComponenteActual={setComponenteActual}
            nombre={nombre}
            midios={midios}            />
        );
      case "yapuedes":
        return <Yapuedes setComponenteActual={setComponenteActual} />;
      default:
        return null;
    }}
  };
  useEffect(() => {
    switch (componenteactual) {
      case "conflicto":
        setFondo(`url("/preguntas/en/1.png")`);
        break;
      case "relaciones":
        setFondo(`url("/preguntas/en/2.png")`);
        break;
      case "estrategia":
        setFondo(`url("/preguntas/en/3.png")`);
        break;
      case "resolutividad":
        setFondo(`url("/preguntas/en/4.png")`);
        break;
      case "trabajo":
        setFondo(`url("/preguntas/en/5.png")`);
        break;
      case "lugar":
        setFondo(`url("/preguntas/en/6.png")`);
        break;
      case "humor":
        setFondo(`url("/preguntas/en/7.png")`);
        break;
      case "creatividad":
        setFondo(`url("/preguntas/en/8.png")`);
        break;
      case "juicio":
        setFondo(`url("/preguntas/en/9.png")`);
        break;
      case "horario":
        setFondo(`url("/preguntas/en/910.png")`);
        break;
      case "resultado":
        setFondo(`url("/PortfolioEnvio.png")`);
        break;
      default:
        setFondo(`url("/fondo2.png")`);
        break;
    }
  }, [componenteactual]);
 
  const loadingHandler = () => {
    if (!loadingvisible || componenteactual === "resultado") {
      return "hidden";  
    } else {
      return "text-center mt-20 pt-20";  
    }
  };

  useEffect(() => {
    setloadingvisible(true);  

    setTimeout(() => {
      setloadingvisible(false);  
      loadingHandler();  
    }, 600);

   }, [componenteactual]);



  return (
    <div
      className="h-screen flex justify-center text-center "
      style={{
        backgroundImage: fondo,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
     >
      {loadingvisible && (
                <div className="mt-24">
        <div className="flex flex-col align-center mt-24 pt-14 " >
        <Image
          src="/gif/GIF1.gif"
          alt="loading"
          width={200}
          height={50}
          className={loadingHandler()}
        />
        </div>
        </div>
      )}
      <div 
      // style={{ zIndex: 1 }}
        >{renderComponenteActual()}</div>
      {/* {isTimerVisible && (
        <div className="absolute top-40 bg-white p-20 flex justify-center items-center z-10 rounded-lg shadow">
          <Restart timer={timer} setReinicioTimer={setReinicioTimer} />
        </div>
      )} */}
    </div>
  );
};

export default Cuestionario;
