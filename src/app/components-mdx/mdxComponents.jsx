import { Typewriter } from 'react-simple-typewriter'

export const H2 = ({ children }) => {
    return <h2 className="text-4xl tracking-wide font-bold"><Typewriter
    words={[children]}
    cursor
    onLoopDone
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  /> </h2>;
  };

export const STRONG = ({children}) => {
  return <strong className="tracking-wide text-blue-500 text-[0.95rem]">{children}</strong>;
}

export const BLOCKQUOTE = ({children}) => {
  return <blockquote className="border border-indigo-300 rounded-lg w-100 p-4 drop-shadow-sm">{children}</blockquote>;
}

export const P = ({children}) => {
  return <p className="tracking-wide [word-spacing:4px] text-gray-500 text-sm">{children}</p>;
}