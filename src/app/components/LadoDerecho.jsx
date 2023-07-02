"use client";

import PadreRicoPadrePobre from "../content/01-padre-rico-padre-pobre.mdx";
import HabitosAtomicos from "../content/02-habitos-atomicos.mdx"
import SiLoCreasLoCreas from "../content/03-si-lo-creas-lo-creas.mdx"

import { H2 } from "../components-mdx/mdxComponents";
import { MDXProvider } from "@mdx-js/react";
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

const components = {
  h2: H2,
};

export default function LadoDerecho() {
  const componetElement = [<PadreRicoPadrePobre />, <HabitosAtomicos />, <SiLoCreasLoCreas/>];

  const [indiceElement, setIndiceElement] = useState(0);

  const handleNavegacion = (incremento) => {
    const nuevoIndice = indiceElement + incremento;
    if (nuevoIndice >= 0 && nuevoIndice < componetElement.length) {
        setIndiceElement(nuevoIndice);
    }
  };

  return (
    <div className="h-full w-full pt-20  xl:pr-56 p-6 xl:p-16 lg:w-1/2 flex items-center flex-col justify-center content-between bg-white">
      <MDXProvider components={components}> {componetElement[indiceElement]}</MDXProvider>
      <ButtonGroup handleNavegacion={handleNavegacion} setIndiceElement={setIndiceElement}/>
    </div>
  );
}
