import { useContext, useState, useEffect } from "react"
import { MyContext } from "../Context/MyContext"
import { Button,  Card, Container} from 'react-bootstrap';
import { useParams } from "react-router-dom"

const DesProducto = () => {
  const {id} = useParams()
  const { pizzas, carrito, addproducto } = useContext(MyContext);
  const [producto, setProducto] = useState({})


  //console.log('CARRITODESPRODUC', producto)
  const prodct = (id) => {
    const recorreArray = pizzas.find((item) => item.id === id)
    setProducto(recorreArray)
  }

  useEffect(() => {
    prodct(id)
  },[])



  // console.log('CARRITO DESDE DESPRODUCTO', carrito)
  
  // const pizza = pizzas.find(pizza => pizza.id === id)
 
  

  //  if (!pizza) {
  //   return <div>Cargando...</div>;
  // }
  
  //const result = pizza.price
  // const prop = props.result
  // console.log('EL RESULTADO ES', prop)

  // const sumar = () => {
  //   setResultado(result)
  // }

  return (
     <div className="container text-center">
       <div className="row">
         <div className="col-md-6">
           <img
             key={producto.id}
             src={producto.img}
             alt={producto.name}
             style={{ width: "100%", height: "100%" }}
           />
         </div>
         <div className="col" style={{ textAlign: "left" }}>
           <h1>{producto.name}</h1>
           <hr />
           <p>{producto.desc}</p>
           <br />
           <span style={{ fontWeight: 500 }}>Ingredientes:</span>
           <div style={{ margin: 20 }}>
            {producto?.ingredients?.map((item, index) => 
              <li key={`${producto.id}-ingredient-${index}`} style={{listStyle: "none"}}>
                🍕 {item}
              </li>)}
             <br/>
           </div>
           <div style={{ display: "flex", justifyContent: "space-between" }}>
             <h1 style={{ fontWeight: 700, textAlign: "rigth", fontSize: 30 }}>
               Precio: ${producto.price}
             </h1>
             <div>
               <Button onClick={() => addproducto(producto.price)} style={{ margin: "0 10px 13px" }} variant="danger">
                 Añadir 🛒
               </Button>
             </div>
             {/* <p>Este es: {resultado} </p> */}
           </div>
         </div>
       </div>
     </div>
   
  );
}

export default DesProducto

 // <Container>
    //   <Card className="CardImg">
    //     <Card.Img variant="top" src={pizza.img} />
    //     <Card.Body style={{ padding: 15 }}>
    //       <Card.Title>{pizza.name}</Card.Title>
    //       <hr />
    //       <Card.Text>
    //         <span style={{ fontWeight: 500 }}>Ingredientes:</span>
    //         {pizza.ingredients.map((lista, index) => (
    //           <li key={index} style={{ listStyle: "none" }}>
    //             🍕 {lista}
    //           </li>
    //         ))}
    //       </Card.Text>
    //       <hr />
    //       <Card.Text style={{ fontWeight: 700, textAlign: "center", fontSize: 20 }}>
    //         ${pizza.price}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Container>