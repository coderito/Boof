"use client"

import { useState } from "react";


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage === totalPages ? 1 : prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage === 1 ? totalPages : prevPage - 1);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md p-4">
        <h1 className="text-4xl text-center">Página {currentPage}</h1>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          className="mr-2 py-2 px-4 rounded-lg bg-blue-500 text-white"
          onClick={handlePrevPage}
        >
          Anterior
        </button>
        <button
          className="py-2 px-4 rounded-lg bg-blue-500 text-white"
          onClick={handleNextPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;