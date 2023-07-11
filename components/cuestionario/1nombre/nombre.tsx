import React, { useState } from "react";

interface NombreProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
}

const Nombre: React.FC<NombreProps> = ({ setComponenteActual, setNombre }) => {
  const [inputValue, setInputValue] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleButtonClick = (character: string) => {
    if (characterCount < 10) {
      setInputValue(inputValue + character);
      setCharacterCount(characterCount + 1);
    }
  };

  const handleDeleteCharacter = () => {
    if (inputValue.length > 0) {
      setInputValue(inputValue.slice(0, -1));
      setCharacterCount(characterCount - 1);
    }
  };

const handleSeguirClick = () => {
  setComponenteActual("nombrehola");
  setNombre(inputValue);
  console.log(inputValue)
};

  return (
    <div className="px-10 py-6">
      <div>
        <input
          type="text"
          value={inputValue}
          readOnly
          className="border-b border-gray-400 px-3   py-1 mb-2 bg-transparent text-black" 
          />
        <h2 className="text-black">Escribe tu nombre</h2>
        {characterCount < 10 && (
          <p className="text-black text-xs font-light">(10 CARACTERES MAX)</p>
        )}
        {characterCount === 10 && (
          <p className="text-red-500 text-xs font-bold">(10 CARACTERES MAX)</p>
        )}
      </div>
      <div className="mx-15 my-7 text-5xl ">
        <div>
        <button onClick={() => handleButtonClick("Q")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          Q 
        </button>
        <button onClick={() => handleButtonClick("W")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          W 
        </button>
        <button onClick={() => handleButtonClick("E")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          E 
        </button>
        <button onClick={() => handleButtonClick("R")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          R 
        </button>
        <button onClick={() => handleButtonClick("T")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          T
        </button>
        <button onClick={() => handleButtonClick("Y")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          Y
        </button>
        <button onClick={() => handleButtonClick("U")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          U
        </button>
        <button onClick={() => handleButtonClick("I")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          I
        </button>
        <button onClick={() => handleButtonClick("O")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          O
        </button>
        <button onClick={() => handleButtonClick("P")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          P
        </button>
        </div>
        <div>
        <button onClick={() => handleButtonClick("A")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          A 
        </button>
        <button onClick={() => handleButtonClick("S")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          S 
        </button>
        <button onClick={() => handleButtonClick("D")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          D 
        </button>
        <button onClick={() => handleButtonClick("F")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          F 
        </button>
        <button onClick={() => handleButtonClick("G")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          G 
        </button>
        <button onClick={() => handleButtonClick("H")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          H 
        </button>
        <button onClick={() => handleButtonClick("J")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          J 
        </button>
        <button onClick={() => handleButtonClick("K")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          K
        </button>
        <button onClick={() => handleButtonClick("L")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          L 
        </button>
        </div>
        <div>
        <button onClick={() => handleButtonClick(" ")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          ___ 
        </button>
        <button onClick={() => handleButtonClick("Z")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          Z 
        </button>
        <button onClick={() => handleButtonClick("X")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          X 
        </button>
        <button onClick={() => handleButtonClick("C")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          C 
        </button>
        <button onClick={() => handleButtonClick("V")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          V 
        </button>
        <button onClick={() => handleButtonClick("B")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          B 
        </button>
        <button onClick={() => handleButtonClick("N")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          N 
        </button>
        <button onClick={() => handleButtonClick("M")} className="bg-transparent px-3  my-1 hover:bg-white hover:text-orange">
          M
        </button>
        <button
          className="bg-transparent    mt-2 mx-1"
          onClick={handleDeleteCharacter}
        >
          &#8592;
        </button>
        </div>


      </div>
      <button
        className=" bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
        onClick={handleSeguirClick}
      >
        SEGUIR
      </button>
    </div>
  );
};

export default Nombre;