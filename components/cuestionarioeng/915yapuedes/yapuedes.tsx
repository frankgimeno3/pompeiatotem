import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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
    <div className="flex flex-col text-center align-center justify-center text-4xl">
      <h1 className="mt-10">YA PUEDES RECOGERLO!</h1>
      <div className="mx-auto my-10">

      <Image src="/tick.png" alt="tick" width={120} height={120} />
      </div>

      <div className="mx-20 text-xs">
        <button className="mt-2 px-6 py-1   text-md text-black bg-cyan-700 rounded bg-opacity-40" onClick={handleRestart}>VUELVE A JUGAR</button>
      </div>
    </div>
  );
};

export default Yapuedes;
