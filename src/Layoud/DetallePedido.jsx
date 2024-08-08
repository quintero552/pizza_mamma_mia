import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

const DetallePedido = () => {
  const { carrito, addproducto, removeItem } = useContext(MyContext)
  const total = carrito.reduce((acumulador, valorActual) => acumulador + valorActual.price * valorActual.count, 0)


  return (
    <div className="container" style={{padding: 50, backgroundColor: "rgba(134, 131, 113, 0.1)"}}>
      
      <div className="row">
      <h3>Detalles del pedido:</h3>
      <div className="detallePedido">

      {carrito?.map((item) => {
        const sumarCarro = () => addproducto(item);
        const restarCarro = () => removeItem(item);
        
        return(
          <div key={item.id} className="detallePedido-item">
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}} key={item.id}>
              <div style={{display: "flex", alignItems: "center"}}>
                <img style={{width: 100, margin: "0 10px 10px 0"}} src={item.img} alt={item.name} />          
                <p style={{fontSize: 20}}>{item.name}</p>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                <p style={{fontSize: 20, marginBottom: 0, marginRight: 5, color: "darkcyan", fontWeight: 500}}>${item.price}</p>
                <button className="btn btn-danger" style={{marginRight: 5}} onClick={restarCarro}>-</button>
                <p style={{fontSize: 20, marginBottom: 0, marginRight: 5}}>{item.count}</p>
                <button className="btn btn-primary" style={{marginRight: 5}} onClick={sumarCarro}>+</button>
              </div>
            </div>
          </div>
        )
      })}
      <hr/>      
      <h1>Total: ${total}</h1>
      <button className="btn btn-success" style={{marginBottom: 15}}>Ir a Pagar</button>
      </div>
      </div>
    </div>
  )
}

export default DetallePedido
