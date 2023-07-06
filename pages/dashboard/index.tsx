import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const Dashboard = () => {
  const [filecontent, setFileContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleFile = (e: React.FormEvent) => {
    e.preventDefault();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    const cookieOptions = {expires: expirationDate, secure: true};

    fetch("http://localhost:5000/files/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: filecontent }), // Utiliza filecontent en lugar de content
    })
      .then(response => {
        if (response.ok) {
          console.log("contenido enviado");
          console.log(response);
        } else {
          throw new Error("Credenciales incorrectas");
        }
      })
      .catch(error => {
        console.error("Ha ocurrido un error:", error);
        // Maneja el error de conexión o cualquier otro error
      });
  };
  
  return (
    <>
      <h1 className="mt-20 text-2xl">
        Check home
      </h1>
      <form onSubmit={handleFile}>
        <div className="mb-4">
          <h2>Content</h2>
          <input
            className="w-full px-4 py-2 border rounded-md"
            type="text"
            value={filecontent}
            onChange={(e) => setFileContent(e.target.value)}
          />
        </div>

        {errorMessage && <p>{errorMessage}</p>}

        <button
          className="mt-8 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
          type="submit" // Cambiado de onClick a type="submit"
        >
          Enviar contenido a imprimir
        </button>
      </form>
    </>
  );
};

export default Dashboard;