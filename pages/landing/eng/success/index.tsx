import React from 'react';
import { useReactToPrint } from 'react-to-print';
import Link from 'next/link';

const Success = () => {
  const componentRef = React.useRef<HTMLDivElement>(null); // Especifica el tipo de objeto ref

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='flex flex-col mx-20 justify-center text-center h-screen'>
      <h1 className="mt-20 text-2xl mb-10">
        ¡El contenido ha sido enviado satisfactoriamente a la impresora!
      </h1>
      <div>
        <button
          className='bg-white mb-10 shadow rounded bg-gray-100 hover:bg-gray-50 px-5 text-xs py-1'
          onClick={handlePrint}
        >
          Imprimir PDF
        </button>
        <Link href="/dashboard">
          <button className='bg-white mb-10 shadow rounded bg-gray-100 hover:bg-gray-50 px-5 text-xs py-1'>
            Haz clic aquí para terminar
          </button>
        </Link>
      </div>
      <div style={{ display: 'none' }}>
        <ComponentToPrint ref={componentRef} />
      </div>
    </div>
  );
};

const ComponentToPrint = React.forwardRef(function ComponentToPrint(
  props,
  ref: React.Ref<HTMLDivElement> // Especifica el tipo de objeto ref
) {
  return (
    <div
      ref={ref}
      
    >
      <div className='flex flex-col mx-20 justify-center text-center h-screen' >
        <h1 className="mt-20 text-2xl mb-10">
          ¡El contenido ha sido enviado satisfactoriamente a la impresora!
        </h1>
        <p>Este es un ejemplo de contenido que se convertirá en PDF.</p>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = 'ComponentToPrint';

export default Success;