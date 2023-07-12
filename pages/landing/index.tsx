import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const landing = () => {
  return (
    <div className="flex flex-col h-screen mx-auto   pt-20 text-center">
      <p className="pt-3 mt-5 text-xs text-black mr-10">TE GUSTARÍA SABER...</p>
      <h1 className="pt-6 text-6xl  mx-20">
        ¿QUÉ DIOS DEL OLIMPO  
      </h1>
      <h1 className="pt-4 text-6xl mb-5 mx-20">
        TE REPRESENTA?
      </h1>
      <p className="text-xs text-black">
        UNA AVENTURA QUE NOS ENSEÑA LAS CUALIDADES DE CADA DIOS ROMANO
      </p>
      <Link href="/landing/es">
        <button className="mt-6 px-10 py-1 mr-10 text-md text-black bg-cyan-700 rounded bg-opacity-40">
          JUGAR
        </button>
      </Link>
      <div className="flex justify-center items-center mt-10 mb-10 mr-10">
        <Link href="/landing/en">
          <div className="flex flex-col text-black mr-20">
            <div className="rounded-full overflow-hidden">
              <Image src="/icon/flor.png" alt="flor" width={40} height={40} />
            </div>
            <button>EN</button>
          </div>
        </Link>
        <Link href="/landing/es">
          <div className="flex flex-col text-black">
            <div className="rounded-full overflow-hidden">
              <Image src="/icon/flor.png" alt="flor" width={40} height={40} />
            </div>
            <button>ES</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default landing;
