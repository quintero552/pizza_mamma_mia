import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

const MyContextProvider = ({children}) => {

    const API = 'pizzas.json'

    
    const [pizzas, setPizzas] = useState([])    
    const [carrito, setCarrito] = useState([])


    console.log('EL CARRITO de mycontex', carrito)

    const getPizzas = async () => {
        const response = await fetch(API)
        const data = await response.json()
        setPizzas(data)
    }

    const addproducto = (producto) => {
      // agregamos una constante donde validara dentro del array si existe el producto
      const productoEnCarrito = carrito.find((item) => item.id === producto.id);
      if(productoEnCarrito){ // si ya hay un producto agregado, sumame otro
        setCarrito(carrito.map((item) => item.id === producto.id ? {...productoEnCarrito, contador: item.price + item.price} : item))
      }else{ // sino agrega un producto nuevo
        setCarrito([...carrito, {...producto, contador: + 1}])
        //console.log('ELSE NO ==>', setCarrito([...carrito, producto]))
      }
      //console.log('PRODUCTOeNcARRITO', carrito)
      
    }
    

    const resultados = {
        pizzas,
        carrito,
        addproducto,
    }

    useEffect(() => {
      getPizzas()
    },[])
    
    return (
      <MyContext.Provider value={resultados}>
        {children}
      </MyContext.Provider>
    );
}

export default MyContextProvider


