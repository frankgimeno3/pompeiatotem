import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
 
 
interface ResultadoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setmidios: React.Dispatch<React.SetStateAction<string>>;
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

const Resultado: React.FC<ResultadoProps> = ({setComponenteActual, setmidios,
  nombre, conflicto, relaciones, estrategia, resolutividad,   trabajo, lugar, humor, creatividad,   juicio, horario, }) => {

  const router = useRouter();
  const [jupiterPoints, setJupiterPoints] = useState(0);
  const [junoPoints, setJunoPoints] = useState(0);
  const [minervaPoints, setMinervaPoints] = useState(0);
  const [vulcanoPoints, setVulcanoPoints] = useState(0);
  const [dianaPoints, setDianaPoints] = useState(0);
  const [feboPoints, setFeboPoints] = useState(0);
  const [venusPoints, setVenusPoints] = useState(0);
  const [ceresPoints, setCeresPoints] = useState(0);
  const [neptunoPoints, setNeptunoPoints] = useState(0);
  const [martePoints, setMartePoints] = useState(0);
  const [mercurioPoints, setMercurioPoints] = useState(0);
  const [vestaPoints, setVestaPoints] = useState(0);

 
  const pointsObject: Record<string, number> = {
    JUPITER: jupiterPoints,
    JUNO: junoPoints,
    MINERVA: minervaPoints,
    VULCANO: vulcanoPoints,
    DIANA: dianaPoints,
    FEBO: feboPoints,
    VENUS: venusPoints,
    CERES: ceresPoints,
    NEPTUNO: neptunoPoints,
    MARTE: martePoints,
    MERCURIO: mercurioPoints,
    VESTA: vestaPoints,
  };

  const [isVisible, setIsVisible] = useState(false);
  const springAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 500 },
    onRest: () => {
      if (!isVisible) {
        setIsVisible(true);
      }
    },
  });
  


  const Contenido =     {
      "CERES": "DIOSA DE LA AGRICULTURA, LA FERTILIDAD Y LAS COSECHAS, VINCULADA AL CAMPO Y LA NATURALEZA. ES CONOCIDA POR SER CARIÑOSA Y GENEROSA.",
      "DIANA": "DIOSA DE LA CAZA, LA LUNA, LA NATURALEZA, LA CASTIDAD, Y PROTECTORA DE LOS NIÑOS. ES HABITANTE DEL BOSQUE Y CAPAZ DE HABLAR CON LOS ANIMALES.",
      "FEBO": "DIOS DEL SOL,  LA BELLEZA, LAS ARTES PLÁSTICAS Y LA MÚSICA. ES CONOCIDO POR SU SABIDURÍA Y COMPETITIVIDAD.",
      "JUPITER": "DIOS DE DIOSES. SEÑOR DEL TRUENO, PROTECTOR DE LAS LEYES Y LA JUSTICIA",
      "JUNO": "SEÑORA DEL OLIMPO, PROTECTORA DEL MATRIMONIO, LA MATERNIDAD Y LA FAMILIA. ES CONOCIDA POR TENER UN CARACTER FUERTE Y SER INCONDICIONALMENTE FIEL",
      "MARTE": "DIOS DE LA GUERRA Y PATRÓN DE LA PERFECCIÓN Y LA BELLEZA. ÉS CONOCIDO POR SER VALIENTE, IMPULSIVO Y APASIONADO.",
      "MERCURIO": "DIOS MENSAJERO, DEL COMERCIO, LOS VIAJES Y LA ELOCUENCIA. ES CONOCIDO POR SU VERSATILIDAD Y ASTUCIA.",
      "MINERVA": "DIOSA DE LA ESTRATEGIA, LA JUSTICIA Y LA SABIDURÍA. ES RECONOCIDA POR SU PERSONALIDAD EQUILIBRADA Y SU PERFECCIONISMO.",
      "NEPTUNO": "DIOS DE LOS MARES Y PATRÓN DE LOS MARINEROS. ES CONOCIDO POR SU PODER, FUERZA Y HABILIDADES DENTRO Y FUERA DEL AGUA. ES APASIONADO Y ENAMORADIZO.",
      "VENUS": "DIOSA DEL AMOR, LA FERTILIDAD Y LA BELLEZA. ES CONOCIDA POR SER ENAMORADIZA, COMPETITIVA Y SEDUCTORA. ",
      "VESTA": "DIOSA DEL HOGAR Y LA FAMILIA. ES LA PROTECTORA DEL FUEGO DEL HOGAR Y SIMBOLIZA LA UNIÓN Y LA ESTABILIDAD EN LA VIDA FAMILIAR.",
      "VULCANO": "DIOS DEL FUEGO Y DE LA FORJA, DE LOS ARTESANOS Y EL INGENIO. SE CARACTERIZA POR SER TRANQUILO, PACÍFICO Y TRABAJADOR."
        
  };
  
  
let criterios: string[]= [conflicto, relaciones, estrategia, resolutividad, trabajo, lugar, humor, creatividad, juicio, horario, ]
 
  //.................................................................................................
//aqui he d'insertar cada una de les funcionalitats

useEffect(() => {
  setIsVisible(true);
  actualizarPuntos(criterios)

 
}, []);

//primer hauria de crear i implementar criterioalgoritmo. TÉ COM A INPUT CRITERIOS. Dona diosAlgoritmo com a valor. 
    //ens dona resultat amb que treballar a selectdios
 
    function criterioAlgoritmo(criterios: string[] ) {
      switch (true) {
         case criterios[0] == "PACÍFICO" &&
          criterios[1] == "ENAMORADIZO" &&
          criterios[2] == "ESTRATEGA" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "HOLGAZÁN" &&
          criterios[5] == "CIUDAD" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "DIURNO":
          return "JUPITER";
        case criterios[0] == "PACÍFICO" &&
          criterios[1] == "FIEL" &&
          criterios[2] == "IMPULSIVO" &&
          criterios[3] == "CONFRONTACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CIUDAD" &&
          criterios[6] == "MALHUMOR" &&
          criterios[7] == "CREATIVO" &&
          criterios[8] == "INJUSTO" &&
          criterios[9] == "DIURNO":
          return "JUNO";
        case criterios[0] == "GUERRERO" &&
          criterios[1] == "FIEL" &&
          criterios[2] == "ESTRATEGA" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CIUDAD" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "DIURNO":
          return "MINERVA";
        case criterios[0] == "PACÍFICO" &&
          criterios[1] == "FIEL" &&
          criterios[2] == "ESTRATEGA" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CAMPO" &&
          criterios[6] == "MALHUMOR" &&
          criterios[7] == "CREATIVO" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "DIURNO":
          return "VULCANO";
        case criterios[0] == "GUERRERO" &&
          criterios[1] == "FIEL" &&
          criterios[2] == "IMPULSIVO" &&
          criterios[3] == "CONFRONTACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CAMPO" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "INJUSTO" &&
          criterios[9] == "NOCTURNO":
          return "DIANA";
        case criterios[0] == "PACÍFICO" &&
          criterios[1] == "ENAMORADIZO" &&
          criterios[2] == "IMPULSIVO" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "HOLGAZÁN" &&
          criterios[5] == "CAMPO" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "CREATIVO" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "DIURNO":
          return "FEBO";
        case criterios[0] == "PACÍFICO" &&
          criterios[1] == "ENAMORADIZO" &&
          criterios[2] == "IMPULSIVO" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "HOLGAZÁN" &&
          criterios[5] == "CAMPO" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "CREATIVO" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "NOCTURNO":
          return "VENUS";
        case criterios[0] == "PACÍFICO" &&
          criterios[1] == "FIEL" &&
          criterios[2] == "IMPULSIVO" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CAMPO" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "DIURNO":
          return "CERES";
        case criterios[0] == "GUERRERO" &&
          criterios[1] == "ENAMORADIZO" &&
          criterios[2] == "ESTRATEGA" &&
          criterios[3] == "CONFRONTACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CAMPO" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "DIURNO":
          return "NEPTUNO";
        case criterios[0] == "GUERRERO" &&
          criterios[1] == "ENAMORADIZO" &&
          criterios[2] == "IMPULSIVO" &&
          criterios[3] == "CONFRONTACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CIUDAD" &&
          criterios[6] == "MALHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "INJUSTO" &&
          criterios[9] == "DIURNO":
          return "MARTE";
        case criterios[0] == "PACÍFICO" &&
          criterios[1] == "FIEL" &&
          criterios[2] == "ESTRATEGA" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CIUDAD" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "INJUSTO" &&
          criterios[9] == "DIURNO":
          return "MERCURIO";
        case criterios[0] == "PACÍFICO" &&
          criterios[1] == "FIEL" &&
          criterios[2] == "ESTRATEGA" &&
          criterios[3] == "NEGOCIACIÓN" &&
          criterios[4] == "TRABAJADOR" &&
          criterios[5] == "CIUDAD" &&
          criterios[6] == "BUENHUMOR" &&
          criterios[7] == "RACIONAL" &&
          criterios[8] == "JUSTO" &&
          criterios[9] == "DIURNO":
          return "VESTA";
        default:
          return " ";
      }
    }
    let diosAlgoritmo = criterioAlgoritmo(criterios)  

//2, crear i implementar actualizar puntos, per modificar pointsObject en base a criterios.
    //ens serveix pel punt següent

    function actualizarPuntos(criterios: string[] ) {
      for (let i = 0; i < criterios.length; i++) {
        const criterio = criterios[i];
        switch (criterio) {
          case "PACÍFICO":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setJunoPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            break;
          case "GUERRERO":
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
          case "FIEL":
            setJunoPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            break;
          case "ENAMORADIZO":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
          case "ESTRATEGA":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "IMPULSIVO":
            setJunoPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
  
          case "NEGOCIACIÓN":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "CONFRONTACIÓN":
            setJunoPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
  
          case "TRABAJADOR":
            setJunoPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
  
          case "HOLGAZÁN":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "CIUDAD":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setJunoPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
  
          case "CAMPO":
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "BUENHUMOR":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "MALHUMOR":
            setJunoPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
  
          case "RACIONAL":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            break;
  
          case "CREATIVO":
            setJunoPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "JUSTO":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setVenusPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "INJUSTO":
            setJunoPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            break;
  
          case "DIURNO":
            setJupiterPoints((prevPoints) => prevPoints + 1);
            setJunoPoints((prevPoints) => prevPoints + 1);
            setVulcanoPoints((prevPoints) => prevPoints + 1);
            setFeboPoints((prevPoints) => prevPoints + 1);
            setCeresPoints((prevPoints) => prevPoints + 1);
            setMercurioPoints((prevPoints) => prevPoints + 1);
            setVestaPoints((prevPoints) => prevPoints + 1);
            setMinervaPoints((prevPoints) => prevPoints + 1);
            setNeptunoPoints((prevPoints) => prevPoints + 1);
            setMartePoints((prevPoints) => prevPoints + 1);
          break;
  
          case "NOCTURNO":
            setVenusPoints((prevPoints) => prevPoints + 1);
            setDianaPoints((prevPoints) => prevPoints + 1);
            break;
        }
      }
    }

    
      //recordatori: això d adalt servia per modificar estats. NO DONA UN RESULTAT.

    //3, crear i implementar maxGodPoints, que pren com a imput pointsObject, actualitzat al punt 2
        //ens dona com a resultat el guanyador per punts, diosPuntos
            //si és un sol, el retorna
            //si no, retorna un d'aleatori
            function maxGodPoints(pointsObject: Record<string, number>) {
              const maxScore = Math.max(...Object.values(pointsObject));
              const maxScoreKeys = Object.keys(pointsObject).filter((key) => pointsObject[key] == maxScore);
            
              if (maxScoreKeys.length == 1) {
                return maxScoreKeys[0];
              } else {
                const randomIndex = Math.floor(Math.random() * maxScoreKeys.length);
                return maxScoreKeys[randomIndex];
              }
            }

            let diosPuntos = maxGodPoints(pointsObject)  

//4, AQUÍ COMENÇA Selectdios, que té com a input diosAlgoritmo i diosPuntos. Fa l'equivalent a checkCriterio.
// comproba si diosAlgoritmo és ''. 
        //Si ho és, return diosPuntos.
        //Si no, return diosAlgoritmo

//---
 
function Selectdios(diosAlgoritmo: any, diosPuntos: any) {
  switch (diosAlgoritmo) {
    case " ":
      console.log("NO  fue por criterios")
      console.log(criterios)
      console.log(pointsObject)
      return(diosPuntos);
    default:
      console.log("SÍ  fue por criterios")
      console.log(criterios)
      console.log(pointsObject)

      return(diosAlgoritmo);
  }
}
let tuDios = Selectdios(diosAlgoritmo, diosPuntos);



  //.................................................................................................
  const handleSeguirClick = () => {
    setmidios(tuDios);
     setComponenteActual("enviar");
  };

  const handleRestart = () => {
    router.push("/landing");
  };


  const imagendios = `/DEUSPOMPEIA/${tuDios}.png`;

  return (
    <animated.div
      className="flex flex-col mb-10 text-center justify-center p-24  w-screen"
      style={springAnimation}
    >
      <div className="mt-14 pt-8 px-20">
        <div className="flex flex-row text-left justify-center align-center  px-20 pr-24 mx-14 ">
          <div className="flex-1 flex flex-col ml-16 pt-10">
            <div className="pl-24 ml-14">
              <h1 className="text-7xl mt-10 ">{nombre}</h1>
              <p className="text-black text-2xl mt-2 mb-16   text-black">
                TU DIOS ES
              </p>
              <h2 className="text-black  text-7xl  mb-5   ">{tuDios}</h2>
              <div className="text-black">
              <div className="text-2xl mb-10 pr-5">{(Contenido as any)[tuDios]}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center ">
            <Image
              src={imagendios}
              alt={tuDios}
              width={400}
              height={400}
              style={{ width: "auto", height: "auto" }}
              className="px-20"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center px-24 mx-16">
          <div className="flex-1 mr-24">
            <button
              className="mt-2 px-8 py-4 shadow-lg text-3xl text-black bg-cyan-700 rounded bg-opacity-40 mr-4"
              onClick={handleSeguirClick}
            >
              IMPRIMIR
            </button>
          </div>
          <div className="flex-1">
            <button
              className="px-8 py-4 shadow-lg py-0.5 text-3xl text-black bg-cyan-700 rounded bg-opacity-40 ml-4 mt-2"
              onClick={handleRestart}
            >
              FINALIZAR SIN IMPRIMIR
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Resultado;
