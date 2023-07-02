"use client"

import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai"

export default function ButtonGroup({handleNavegacion, setIndiceElement, indiceElement }) {
  return (
    <div class="inline-flex rounded-md shadow-sm" role="group">
      {indiceElement !== 0 &&  <button
        onClick={() => handleNavegacion(-1)}
        type="button"
        class="inline-flex items-center px-4 gap-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
       <AiOutlineDoubleLeft/>
        Left
      </button> }
     
      <button
        onClick={() => setIndiceElement(0)}
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l border-r border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Reset
      </button>
      <button
      onClick={() => handleNavegacion(1)}
        type="button"
        class="inline-flex items-center px-4 py-2 gap-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Right
        <AiOutlineDoubleRight/>
      </button>
    </div>
  );
}
