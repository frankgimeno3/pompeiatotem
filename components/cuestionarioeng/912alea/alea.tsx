import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Restartbutton from "./../../Restartbutton";

interface AleaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const Alea: React.FC<AleaProps> = ({ setComponenteActual }) => {
  // State to manage the visibility of the component

  const [isVisible, setIsVisible] = useState(true);
  const springAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 500 },
    onRest: () => {
      if (!isVisible) {
        setIsVisible(true);
        setComponenteActual("resultado");
      }
    },
  });

  const handleSeguirClick = () => {
    setIsVisible(false);
  };

  return (
    <animated.div
      style={springAnimation}
      className="flex flex-col text-center justify-center"
    >
       <h2 className="text-7xl  ">¡ALEA IACTA EST!</h2>
      <h2 className="text-7xl mb-20">THE DIE IS CAST!</h2>

      <div className="mx-20">
        <button
          className="mt-2 px-8 py-4 shadow-lg text-3xl text-black bg-cyan-700 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
          SEE RESULTS
        </button>
        </div> 
     </animated.div>
  );
};

export default Alea;
