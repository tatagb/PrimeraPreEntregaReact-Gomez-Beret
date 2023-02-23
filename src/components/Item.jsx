import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({id, description, price, image, stock, category}) => {
  return (
    <div className="col-md-3" key={id}>
      <div className="card m-5 d-flex flex-column justify-content-center aling-items-center ">
      <Card style={{ width: '18rem' }}>
      <Card.Img id="imagenCard" src={image}/>
      <Card.Body className="card-body d-flex flex-column justify-content-center aling-items-center">
        <Card.Title className="card-title text-center">{category}:  {description}</Card.Title>
        <Card.Text className="card-text text-center ">
          Stock Disponible: {stock}
        </Card.Text>
        <Card.Text className="card-text text-center ">
          Precio: ARS $ {price}
        </Card.Text>
        <Button className ="btn-warning" variant="primary">
        <Link to={`/item/${id}`}>Detalles</Link>
          </Button>
      </Card.Body>
    </Card>
      </div>
    </div>
   
  );
};

export default Item;