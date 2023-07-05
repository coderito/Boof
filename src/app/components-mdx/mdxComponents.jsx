import { Typewriter } from 'react-simple-typewriter'

export const H2 = ({ children }) => {
    return <h2 className="text-4xl tracking-wide font-bold"> <Typewriter
    words={[children]}
    cursor
    onLoopDone
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  /></h2>;
  };