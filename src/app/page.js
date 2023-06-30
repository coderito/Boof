const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
    <div className="h-1/2 md:h-full w-full md:w-1/2 bg-gray-200 flex items-center justify-center">
      <h1 className="text-4xl">Lado Izquierdo</h1>
    </div>
    <div className="h-1/2 md:h-full w-full md:w-7/12 bg-gray-300 flex items-center justify-center">
      <h1 className="text-4xl">Lado Derecho</h1>
    </div>
  </div>
  );
};

export default Home;
