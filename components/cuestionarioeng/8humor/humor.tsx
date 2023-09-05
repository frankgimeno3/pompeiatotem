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
      <div className="flex flex-col mr-16 mt-24 pr-16 justify-end ">
        <div className="pr-24 flex flex-col mx-24 ">
          <div className=" mr-24 pr-24">
            <button
              className="w-600 text-7xl h-200 px-24 py-10   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("BUENHUMOR")}
            >
            HAPPY
            </button>
          </div>

          <div className="  pr-24 mr-24 ">
          <button
              className="w-600 text-7xl h-200 px-20 py-10   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("MALHUMOR")}
            >
            MOODY
            </button>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Humor;