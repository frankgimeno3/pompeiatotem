import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

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
      <h2 className="text-6xl">¡ALEA IACTA EST!</h2>
      <h2 className="text-6xl mb-20">¡LA SUERTE ESTÁ ECHADA!</h2>

      <div className="mx-20">
        <button
          className="mt-2 px-6 py-1   text-md text-black bg-cyan-700 rounded bg-opacity-40"
          onClick={handleSeguirClick}
        >
          VER
        </button>
      </div>
    </animated.div>
  );
};

export default Alea;
