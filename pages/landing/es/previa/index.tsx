// import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from 'next/link';

// const cuestionario = () => {
//   const [filecontent, setFileContent] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const router = useRouter();

//   const handleFile = (e: React.FormEvent) => {
//     e.preventDefault();
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + 1);
//     const cookieOptions = {expires: expirationDate, secure: true};

//     fetch("http://localhost:5000/files/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ content: filecontent }), // Utiliza filecontent en lugar de content
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log("contenido enviado");
//           router.push("/dashboard/success")
//         } else {
//           throw new Error("Credenciales incorrectas");
//         }
//       })
//       .catch(error => {
//         console.error("Ha ocurrido un error:", error);
//         // Maneja el error de conexión o cualquier otro error
//       });
//   };
  
//   return (
//     <div className="h-screen mx-20">
//       <p>TE GUSTARÍA SABER...</p>
//       <h1 className="pt-20 text-2xl mb-10">
//         ¿QUÉ DIOS DEL OLIMPO TE REPRESENTA?
//       </h1>
//       <form onSubmit={handleFile}>
//         <div className="mb-1">
//           <h2 className="mb-4">Inserte aquí contenido para enviar a imprimir</h2>
//           <input
//             className="w-full px-4 py-2 border rounded-md"
//             type="text"
//             value={filecontent}
//             onChange={(e) => setFileContent(e.target.value)}
//           />
//         </div>

//         {errorMessage && <p>{errorMessage}</p>}

//         <button
//           className="mt-3 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
//           type="submit" // Cambiado de onClick a type="submit"
//         >
//           Enviar contenido a imprimir
//         </button>
//       </form>
//     </div>
//   );
// };

// export default cuestionario;