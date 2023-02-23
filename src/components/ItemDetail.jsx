import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";

const ItemDetail = ({ items }) => {
    const { id } = useParams();
  
    const itemFilter = items.filter((item) => item.id == id);
  
    return (
      <>
        {itemFilter.map((item) => (
      <div id="cardDetallada" key={item.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img id="imagenDetallada" src={item.image}/>
      <Card.Body>
        <Card.Title>{item.description}:  
        <p>{item.detalle}</p>
        </Card.Title>
        <Card.Text>
          Stock Disponible: {item.stock}
        </Card.Text>
        <Card.Text>
          Precio: ARS $ {item.price}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;

  