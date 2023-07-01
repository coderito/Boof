import Hello from "../content/hello.mdx"

export default function LadoDerecho() {
    return (
        <div className="h-1/2 md:h-full w-full md:w-7/12 bg-gray-300 flex items-center justify-center">
            <Hello />
        </div>
    )
}