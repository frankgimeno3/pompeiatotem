import React, { useState, useEffect } from "react";
 
interface ConflictoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setConflicto: React.Dispatch<React.SetStateAction<string>>;
}

const Conflicto: React.FC<ConflictoProps> = ({
  setComponenteActual,
  setConflicto,
}) => {
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
    setConflicto(option);
    setComponenteActual("relaciones");
  };

  return (
    <div
      className={`flex flex-col mt-14 pt-14 justify-right ml-24 pl-24 ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
        <div className=" flex flex-col   ml-24 pl-24  justify-end text-8xl ">
        <div className=" flex flex-col pl-24 mx-auto">
        <button
        className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24 ${
                selectedOption === "PACÍFICO"
                  ? "bg-white bg-opacity-40 rounded-full"
                  : ""
              }`}
              onClick={() => handleOptionClick("PACÍFICO")}
            >
              PACIFIC
            </button>
            <button
          className={`px-5 py-3 rounded-xl bg-amber-950 bg-opacity-10 mt-24 ml-24${
            selectedOption === "GUERRERO"
                  ? "bg-white bg-opacity-40 rounded-full"
                  : ""
              }`}
              onClick={() => handleOptionClick("GUERRERO")}
            >
              WARRIOR
              </button>
      </div> 
    </div>
    </div>
  );
};

export default Conflicto;
