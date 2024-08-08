import Detalle from "../Components/Detalle";

const Home = () => {
  return (
    <>
      <div className="Banner">
        <div style={{ color: "white", textAlign: "center", padding: "50px" }}>
          <h1>¡Pizzería Mamma Mia!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr />
        </div>
      </div>
      <Detalle />
    </>
  );
};

export default Home;
