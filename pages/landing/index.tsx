import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const landing = () => {
  return (
    <div className="h-screen mx-20 pt-6 text-center">
      <p className="pt-10 text-xs">TE GUSTARÍA SABER...</p>
      <h1 className="pt-10 text-4xl mb-10">
        ¿QUÉ DIOS DEL OLIMPO TE REPRESENTA?
      </h1>
      <p className="text-xs">UNA AVENTURA QUE NOS ENSEÑA LAS CUALIDADES DE CADA DIOS ROMANO</p>
      <Link href="/landing/es">
        <button className="mt-2 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white">
          JUGAR{" "}
        </button>
      </Link>
      <div className="flex flex-row justify-center mt-10 mb-10">
        <Link href="/landing/en">
          <div className="flex flex-col ">
            <div className="rounded-full overflow-hidden">
              <Image src="/icon/flor.png" alt="flor" width={40} height={40} />
            </div>
            <button> EN</button>
          </div>
        </Link>
        <Link href="/landing/es">
          <div className="flex flex-col">
            <div className="rounded-full overflow-hidden">
              <Image src="/icon/flor.png" alt="flor" width={40} height={40} />
            </div>
            <button> ES</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default landing;