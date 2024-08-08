import "./App.css";
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";
import { Home, DesProducto, DetallePedido, NotFound } from "./Layoud/Index";
import MyContextProvider from "./Context/MyContext";

const App = () => {
  return (
    <MyContextProvider>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DesProducto />} />
        <Route path="/detallepedido" element={<DetallePedido />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MyContextProvider>
  );
};

export default App;
