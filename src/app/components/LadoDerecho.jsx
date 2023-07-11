"use client";

import PadreRicoPadrePobre from "../content/01-padre-rico-padre-pobre.mdx";
import HabitosAtomicos from "../content/02-habitos-atomicos.mdx";
import SiLoCreesLoCreas from "../content/03-si-lo-crees-lo-creas.mdx";
import ElHombreEnBuscaDeSentido from "../content/04-el-hombre-en-busca-de-sentido.mdx";
import Los7HabitosDeLaGenteAltamenteEfetiva from "../content/05-los-7-habitos-de-la-gente-altamente-efectiva.mdx";
import InteligenciEmocional from "../content/06-inteligencia-emocional.mdx";
import PensarRapidoPensarDespacio from "../content/07-pensar-rapido-pensar-despacio.mdx";
import ElPoderDelAhora from "../content/08-el-poder-del-ahora.mdx";
import ElSutilArteDeQueTeImpoteUnCaraj from "../content/09-el-sutil-arte-de-que-te-importe-un-carajo.mdx";
import ElArteDeHacerDinero from "../content/10-el-arte-de-hacer-dinero.mdx";

import Image from "next/image";
import logo from "../../../public/icon.png";

import { H2, STRONG } from "../components-mdx/mdxComponents";
import { MDXProvider } from "@mdx-js/react";
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

const components = {
  h2: H2,
  strong: STRONG,
};

export default function LadoDerecho() {
  const componetElement = [
    <PadreRicoPadrePobre />,
    <HabitosAtomicos />,
    <SiLoCreesLoCreas />,
    <ElHombreEnBuscaDeSentido />,
    <Los7HabitosDeLaGenteAltamenteEfetiva />,
    <InteligenciEmocional />,
    <PensarRapidoPensarDespacio />,
    <ElPoderDelAhora />,
    <ElSutilArteDeQueTeImpoteUnCaraj />,
    <ElArteDeHacerDinero />,
  ];

  const [indiceElement, setIndiceElement] = useState(0);

  const handleNavegacion = (incremento) => {
    const nuevoIndice = indiceElement + incremento;
    if (nuevoIndice >= 0 && nuevoIndice < componetElement.length) {
      setIndiceElement(nuevoIndice);
    }
  };

  return (
    <div className="h-screen w-full lg:overflow-y-auto p-6 lg:px-24  xl:w-1/2 bg-white">
      <div className="py-10">
        <Image
          src={logo}
          width={100}
          height={100}
          className="rounded-sm text-center	"
        />
        <ButtonGroup
          handleNavegacion={handleNavegacion}
          indiceElement={indiceElement}
          setIndiceElement={setIndiceElement}
        />
      </div>
      <MDXProvider components={components}>
        {" "}
        {componetElement[indiceElement]}
      </MDXProvider>
    </div>
  );
}
