import LadoDerecho from "./components/LadoDerecho";
import LadoIzquiero from "./components/LadoIzquierdo";

const Home = () => {
  return (
    <div className="w-screen flex flex-col md:flex-row">
      <LadoIzquiero />

      <LadoDerecho />
    </div>
  );
};

export default Home;
