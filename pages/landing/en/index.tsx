import React, { useState, useEffect, useCallback } from "react";

import Nombre from "../../../components/cuestionarioeng/1nombre/nombre";
import Nombrehola from "../../../components/cuestionarioeng/1nombrehola/nombrehola";
import Yahora from "../../../components/cuestionarioeng/1yahora/yahora";
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

const Cuestionarioeng = () => {
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
          />
        );
      case "yapuedes":
        return <Yapuedes setComponenteActual={setComponenteActual} />;
      default:
        return null;
    }}
  };

  const loadingHandler = useCallback(() => {
    if (!loadingvisible) {
      return "hidden"; // Clase CSS para ocultar la imagen
    } else {
      return "text-center mt-20 pt-20"; // Clase CSS para agregar sombra
    }
  }, [loadingvisible]); // Specify loadingvisible as the only dependency for loadingHandler


  useEffect(() => {
    // setloadingvisible(true); // Mostrar imagen de carga al cambiar componenteactual

    setTimeout(() => {
      // setloadingvisible(false); // Ocultar imagen de carga después de 2 segundos
      // loadingHandler(); // Volver a llamar a loadingHandler después de 2 segundos
      if(conflicto){console.log(conflicto)}
      else{console.log("Está vacío")}
    }, 1100);

    // Aquí puedes agregar cualquier otra lógica que desees ejecutar al cambiar componenteactual

  }, [componenteactual, conflicto, 
    // loadingHandler
  ]);


  return (
    <div
      className="h-screen flex justify-center text-center"
      style={{
        backgroundImage: `url("/fondo2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* {loadingvisible && (
        <div className="flex flex-col align-center mt-14 pt-14">
        <Image
          src="/gif/GIF1.gif"
          alt="loading"
          width={200}
          height={50}
          style={{ width: "auto", height: "auto" }} 
          className={loadingHandler()}
        />
        </div>
      )} */}
      {renderComponenteActual()}
    </div>
  );
};

export default Cuestionarioeng;
