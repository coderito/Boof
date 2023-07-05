import LadoDerecho from "./components/LadoDerecho";
import LadoIzquiero from "./components/LadoIzquierdo";

const Home = () => {
  return (
    <>
      <div className="w-screen two-column-layout flex flex-col lg:flex-row">
        <LadoIzquiero />
        <LadoDerecho />
      </div>
    </>
  );
};

export default Home;
