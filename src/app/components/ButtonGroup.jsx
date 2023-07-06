"use client";

import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineHome,
} from "react-icons/ai";

export default function ButtonGroup({
  handleNavegacion,
  setIndiceElement,
  indiceElement,
}) {
  return (
    <div class="inline-flex rounded-md shadow-sm mt-10" role="group">
      {indiceElement !== 0 && (
        <button
          onClick={() => handleNavegacion(-1)}
          type="button"
          class="inline-flex items-center px-4 gap-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
        >
          <AiOutlineDoubleLeft />
          Previos
        </button>
      )}

      <button
        onClick={() => setIndiceElement(0)}
        type="button"
        class="inline-flex items-center px-4 py-2 gap-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l border-r border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
      >
        <AiOutlineHome />
        Home
      </button>
      <button
        onClick={() => handleNavegacion(1)}
        type="button"
        class="inline-flex items-center px-4 py-2 gap-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
      >
        Next
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
}
