import React, { useState, useEffect } from "react";

import Nombre from "../../../components/cuestionario/1nombre/nombre";
import Nombrehola from "../../../components/cuestionario/1nombrehola/nombrehola";
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
import Image from "next/image";
import Restartbutton from "../../../components/Restartbutton";

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
  const [fondo, setFondo] = useState(`url("/fondo2.png")`);

  const renderComponenteActual = () => {
    while (!loadingvisible) {
      switch (componenteactual) {
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
              midios={midios}
              lang={""}
            />
          );
        case "yapuedes":
          return <Yapuedes setComponenteActual={setComponenteActual} />;
        default:
          return null;
      }
    }
  };
  useEffect(() => {
    switch (componenteactual) {
      case "conflicto":
        setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/1.png")`);
        }, 600);  
        break;
      case "relaciones":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/j2.png")`);
        }, 600);  
        break;
      case "estrategia":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/3.png")`);
        }, 600);  
        break;
      case "resolutividad":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/4.png")`);
        }, 600);  
        break;
      case "trabajo":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/5.png")`);
        }, 600);  
        break;
      case "lugar":
        setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/6.png")`);
        }, 600); 
        break;
      case "humor":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/7.png")`);
        }, 600);  
        break;
      case "creatividad":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/8.png")`);
        }, 600);  
        break;
      case "juicio":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/9.png")`);
        }, 600);  
        break;
      case "horario":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/910.png")`);
        }, 600);  
        break;
      case "resultado":
                setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/PortfolioEnvio.png")`);
        }, 600);  
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
      return "text-center     mx-auto";
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
    className="h-screen  transition-opacity duration-1000 opacity-100"
    style={{
      backgroundImage: `url("/fondo2.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="h-screen flex flex-col justify-center text-center relative transition-opacity duration-1000 opacity-100"
      style={{
        backgroundImage: fondo,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {loadingvisible && (
        <div className=" ">
          <div className="flex flex-col align-center  ">
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

      <div className="absolute top-10 right-10 m-4">
        <Restartbutton />
      </div>
      <div>{renderComponenteActual()}</div>
    </div>
    </div>
  );
};
export default Cuestionario;
