 import Link from 'next/link'
const success = () => {
  return (
    <div className='flex flex-col mx-20 justify-center text-center h-screen '>
         <h1 className="mt-20 text-2xl mb-10">
            El contenido ha sido enviado satisfactoriamente a impresora!
        </h1>
        <div>
          <Link href="/dashboard">
          <button className='bg-white mb-10 shadow rounded bg-gray-100 hover:bg-gray-50 px-5 text-xs py-1'> Haga click aquí para terminar</button>
          </Link>
        </div>
    </div>
    );
};

export default success;
