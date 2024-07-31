
import { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { Button,  Card, Container} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Detalle = () => {    
    
  const { pizzas, carrito, addproducto } = useContext(MyContext)


  //console.log('CARRITODESPRODUC', producto)
  const navigator = useNavigate()  

  const handleCardClick = (id) => {
    navigator(`/pizza/${id}`);
  };

  //const valorCarro = () => addproducto(pizzas.id)
  

   return (    
     <Container>
      {pizzas?.map((item) => {
        const SET = () => handleCardClick(item.id)
        const valorCarro = () => addproducto(item)
        
         return(
         <Card className="CardImg" key={item.id} >
           <Card.Img variant="top" src={item.img} />
           <Card.Body style={{ padding: 15 }}>
             <Card.Title>{item.name}</Card.Title>
             <hr />
             <Card.Text>
               <span style={{ fontWeight: 500 }}>Ingredientes:</span>
               {item.ingredients.map((lista, index) => (
                 <li key={`${pizzas.id}-ingredient-${index}`} style={{ listStyle: "none"}}>
                   🍕 {lista}
                 </li>
               ))}
             </Card.Text>
             <hr />
             <Card.Text style={{ fontWeight: 700, textAlign: "center", fontSize: 20 }}>
               ${item.price}
             </Card.Text>
             <div style={{textAlign: "center"}}>
               <Button onClick={SET} style={{margin: '0 10px 13px'}} variant="info" >Ver Más 👀</Button>
               <Button onClick={valorCarro} style={{margin: '0 10px 13px'}} variant="danger">Añadir 🛒</Button>
             </div>
           </Card.Body>
         </Card>
         )
        })}
     </Container>
   );

}

export default Detalle


//     {/*<Container>
//       {pizzas?.map((item) => {
//         return (
//           <div className="CardImg" key={pizzas.id}>
//             <Card.Img variant="top" src={item.img}/>
//             <Card.Body>
//               <div style={{padding: 15}}>
//                 <Card.Title>{item.name}</Card.Title>
//                 <hr />
//                 <Card.Text>
//                   <div style={{padding: 15, marginBottom: 0}}>
//                   <span style={{ fontWeight: 500 }}>Ingredientes:</span>
//                     {item.ingredients.map((lista) => (
//                       <li key={item.id} style={{ listStyle: "none" }}>🍕 {lista}</li>
//                     ))}
//                   </div>
//                 </Card.Text>
//               </div>
//               <hr />
//               <Card.Text>
//                 <div style={{ fontWeight: 700, textAlign: "center", fontSize: 20 }}>${item.price}</div>
//               </Card.Text>
//               <div style={{textAlign: "center"}}>
//               <Button onClick={boton} style={{margin: '0 10px 13px'}} variant="info" >Ver Más 👀</Button>
//               <Button onClick={boton} style={{margin: '0 10px 13px'}} variant="danger">Añadir 🛒</Button>
//               </div>
//             </Card.Body>
            
//           </div>
//         );
//       })}
      
//     </Container>*/}