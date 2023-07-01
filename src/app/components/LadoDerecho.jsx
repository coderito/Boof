"use client";

import Hello from "../content/hello.mdx";
import { H3 } from "../components-mdx/mdxComponents";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h3: H3,
};

export default function LadoDerecho() {
  return (
    <div className="h-full w-full xl:pr-56 p-10 xl:p-24 md:w-1/2 flex items-center justify-center bg-white">
      <MDXProvider components={components}>
        {" "}
        <Hello />
      </MDXProvider>
    </div>
  );
}
