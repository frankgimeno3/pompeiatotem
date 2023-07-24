import React, { useState } from "react";

interface ConflictoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setConflicto: React.Dispatch<React.SetStateAction<string>>;
}

const Conflicto: React.FC<ConflictoProps> = ({ setComponenteActual, setConflicto }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = async (option: string) => {
    setSelectedOption(option);
    console.log(selectedOption);
    setConflicto(selectedOption);

    // Add a 0.5-second delay using async/await
    await new Promise((resolve) => setTimeout(resolve, 500));

    setComponenteActual("relaciones");
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h2 className="text-black text-xl">IN A CONFLICT SITUATION I AM:</h2>
      <div className="flex flex-row justify-center my-10 text-5xl ">
        <button
          className={`mr-20 px-5 py-2 ${
            selectedOption === "PACÍFICO" ? "bg-white bg-opacity-40 rounded-full" : ""
          }`}
          onClick={() => handleOptionClick("PACÍFICO")}
        >
          PACIFIC
        </button>
        <button
          className={`ml-20 px-5 py-2 ${
            selectedOption === "GUERRERO" ? "bg-white bg-opacity-40 rounded-full" : ""
          }`}
          onClick={() => handleOptionClick("GUERRERO")}
        >
          WARRIOR
        </button>
      </div>
    </div>
  );
};

export default Conflicto;