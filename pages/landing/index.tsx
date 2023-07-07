import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const landing = () => {
  return (
    <div className="h-screen mx-20">
      <p>TE GUSTARÍA SABER...</p>
      <h1 className="pt-20 text-2xl mb-10">
        ¿QUÉ DIOS DEL OLIMPO TE REPRESENTA?
      </h1>
      <p>UNA AVENTURA QUE NOS ENSEÑA LAS CUALIDADES DE CADA DIOS ROMANO</p>
      <Link href="/landing/es">
        <button className="mt-3 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white">
          JUGAR{" "}
        </button>
      </Link>
      <div className="flex flex-row">
        <Link href="/landing/en">
          <div className="flex flex-row">
            <Image src="../../public/icon/flor.png" alt="flor" />
            <button> EN</button>
          </div>
        </Link>
        <Link href="/landing/es">
          <div className="flex flex-row">
            <Image src="../../public/icon/flor.png" alt="flor" />
            <button> ES</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default landing;