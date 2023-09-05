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
 
      <div className="flex flex-col ml-24 pl-24   ">
        <div className="pl-24 flex flex-col ml-24  ">
          <div className=" ml-24 pl-24">
            <button
              className="w-600 text-8xl h-200 px-24 py-8   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("PACÍFICO")}
            >
              PACIFIC
            </button>
          </div>

          <div className=" ml-24 pl-24">
            <button
              className="w-600 text-8xl h-200 px-14 py-10   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("GUERRERO")}
            >
              WARRIOR
            </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Conflicto;
