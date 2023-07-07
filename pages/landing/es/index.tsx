import React, { useState, lazy, Suspense } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const Cuestionario: React.FC = () => {
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

  const renderComponent = (stateName: string) => {
    const Component = lazy(() =>
      import(`../../components/${stateName}.tsx`)
    );

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    );
  };

  return (
    <div className="h-screen mx-20">
      {renderComponent("nombre")}
      {renderComponent("conflicto")}
      {renderComponent("relaciones")}
      {renderComponent("estrategia")}
      {renderComponent("resolutividad")}
      {renderComponent("trabajo")}
      {renderComponent("lugar")}
      {renderComponent("humor")}
      {renderComponent("creatividad")}
      {renderComponent("juicio")}
      {renderComponent("horario")}
    </div>
  );
};
