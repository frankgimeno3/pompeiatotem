import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface YapuedesProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Yapuedes: React.FC<YapuedesProps> = ({ setComponenteActual }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();
 
  const handleRestart = () =>{
    router.push("/landing");
  }
  return (
    <div className="flex flex-col text-center justify-center">
      <h1>YA PUEDES RECOGERLO!</h1>

      <p>TICK ICON</p>

      <div className="flex flex-row text-center justify-center">
        <button onClick={handleRestart}>VUELVE A JUGAR</button>
      </div>
    </div>
  );
};

export default Yapuedes;
