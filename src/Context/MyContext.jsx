import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const API = "pizzas.json";

  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getPizzas = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setPizzas(data);
  };

  const addproducto = ({id,price,img,desc,name,ingredients}) => {
    const productoEnCarrito = carrito.find((item) => item.id === id)
    const product = {id,price,img,desc,name,ingredients, count: 1}
    if (productoEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...productoEnCarrito, count: item.count + 1 }
            :  item
        )
      )
    } else {
      setCarrito([...carrito, product]);
    }
  };

  const removeItem = ({ id }) => {
    const productoEnCarrito = carrito.find((item) => item.id === id); 
    if (productoEnCarrito.count === 1) {
      setCarrito(carrito.filter(item => item.id !== id))
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...productoEnCarrito, count: item.count - 1 }
            : item
        )
      );
    }
  };


  const resultados = {
    pizzas,
    carrito,
    addproducto,
    removeItem,
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return <MyContext.Provider value={resultados}>{children}</MyContext.Provider>;
};

export default MyContextProvider

