import React, { useState, useEffect } from 'react';

interface ReinicioProps {
  timer: number;
}

const Reinicio: React.FC<ReinicioProps> = ({ timer }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1); // Utilizar función para actualizar correctamente
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [countdown]);

  return (
    <div className="flex flex-col justify-center items-center bg-white text-gray-900">
      <h2 className="font-bold text-4xl">¿Sigues ahí?</h2>
      <h2>
        El cuestionario se reiniciará en{' '}
        <span className="font-bold">{countdown}</span> segundos
      </h2>
      <button className="p-2 text-lg bg-gray-900 text-white m-2">
        Continuar
      </button>
    </div>
  );
};

export default Reinicio;