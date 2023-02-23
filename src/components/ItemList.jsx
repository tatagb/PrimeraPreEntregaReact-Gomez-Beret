import Item from "./Item";
import Container from 'react-bootstrap/Container';



const ItemList = ({ items }) => {
  return (
    <>
      <div className="contenedorDeTarjetas" fluid="md">
        {items?.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            image={item.image}
            price={item.price}
            stock={item.stock}
            category={item.category}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;