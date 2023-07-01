"use client"

import Hello from "../content/hello.mdx"
import { H3 } from "../components-mdx/mdxComponents";
import { MDXProvider } from '@mdx-js/react';

const components = {
    h3: H3,
  };


export default function LadoDerecho() {
    return (
        <div className="h-1/2 md:h-full w-full md:w-7/12 bg-gray-300 flex items-center justify-center">
            <MDXProvider components={components}> <Hello /></MDXProvider>
        </div>
    )
}