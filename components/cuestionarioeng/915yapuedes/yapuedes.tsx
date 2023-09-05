import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Restartbutton from "./../../Restartbutton";

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
    <div className="flex flex-col text-center align-center justify-center text-7xl mb-24 ">
      <h1 className="text-7xl">YOUR COPY IS READY TO BE COLLECTED!</h1>
      <div className="mx-auto my-10">
      <Image src="/tick.png" alt="tick" width={400} height={400} />
      </div>

      <div className="mx-20 text-4xl">
        <button className="mt-2 px-8 py-2 shadow-lg text-md text-black bg-cyan-700 rounded bg-opacity-40" onClick={handleRestart}>PLAY AGAIN</button>
      </div> 
    </div>
  );
};

export default Yapuedes;
