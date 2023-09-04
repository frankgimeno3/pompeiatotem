import React, { useState, useEffect } from "react";
import Restartbutton from "./../../Restartbutton";

interface HumorProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHumor: React.Dispatch<React.SetStateAction<string>>;

}

const Humor: React.FC<HumorProps> = ({ setComponenteActual, setHumor }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setIsVisible(true);
    setSelectedOption(option);
    setHumor(option);
    setComponenteActual("creatividad");
  };

  return (
    <div
      className={`flex flex-col  pt-24 justify-right mr-24 pr-24      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
            <div className=" flex flex-col  mr-24 pr-24  justify-start text-8xl ">
        <div className="pr-24 flex flex-col  mx-auto">
          <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10  mr-24 ${
            selectedOption === "BUENHUMOR" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("BUENHUMOR")}
       >
         HAPPY
       </button>
       <button
            className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 mr-24${
              selectedOption === "MALHUMOR" ? "bg-white bg-opacity-40 rounded-full" : ""}`}
         onClick={() => handleOptionClick("MALHUMOR")}
       >
        MOODY
         </button>
        </div>
      </div> 
    </div>
  );
};

export default Humor;