import React, { useState, useEffect } from "react";

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
import Image from "next/image";
import Reinicio from "../../../components/Reinicio";
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

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setIsTimerVisible(true);
    }, 25000); // 15 segundos

    const interval = setInterval(() => {
      if (timer > 0 && isTimerVisible) {
        setTimer(prevTimer => prevTimer - 1);
      } else if (timer === 0) {
        handleRestart();
        setIsTimerVisible(false);
        clearTimeout(firstTimer);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [timer, isTimerVisible]);
  const handleRestart = () => {
    router.push("/landing");
  };

  const superFunction = () => {
    setReinicioTimer(false)
    setIsTimerVisible(false);
    setTimer(20);
    setTimeout(() => {
      setIsTimerVisible(true);
    }, 5000);
  };

  useEffect(() => {
    if (ReinicioTimer) {  
      console.log("it happened")
      superFunction();
    }
  }, [ReinicioTimer]);

  const handleClick = () => {
    setTimeout(() => {
      setReinicioTimer(true);
    }, 25000);
  };

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
        case "yahora":
          return <Yahora setComponenteActual={setComponenteActual} />;
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

  const loadingHandler = () => {
    if (!loadingvisible || componenteactual === "resultado") {
      return "hidden"; // Clase CSS para ocultar la imagen
    } else {
      return "text-center mt-20 pt-20"; // Clase CSS para agregar sombra
    }
  };

  useEffect(() => {
    setloadingvisible(true); // Mostrar imagen de carga al cambiar componenteactual

    setTimeout(() => {
      setloadingvisible(false); // Ocultar imagen de carga después de 2 segundos
      loadingHandler(); // Volver a llamar a loadingHandler después de 2 segundos
    }, 1100);

    // Aquí puedes agregar cualquier otra lógica que desees ejecutar al cambiar componenteactual
  }, [componenteactual]);

  return (
    <div
    className="h-screen flex justify-center text-center "
    style={{
      backgroundImage: `url("/fondo2.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    onClick={handleClick}
  >
      {loadingvisible && (
        <div className="flex flex-col align-center mt-14 pt-14">
          <Image
            src="/gif/GIF1.gif"
            alt="loading"
            width={200}
            height={50}
            className={loadingHandler()}
          />
        </div>
      )}

 
      <div style={{ zIndex: 1 }}>{renderComponenteActual()}</div>
      {isTimerVisible && (
        <div className="absolute top-40 bg-white p-20 flex justify-center items-center z-10 rounded-lg shadow">
          <Reinicio timer={timer} setReinicioTimer={setReinicioTimer}  />
        </div>
      )}
    </div>
  );
};
export default Cuestionario;
