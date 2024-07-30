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
        console.log('Pricipal ==>',data)
    }

    const addproducto = (pric) => {
      //dentro de una variable agregamos el valor
      const carritoPrecio = carrito.find()
     console.log(carritoPrecio)
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


