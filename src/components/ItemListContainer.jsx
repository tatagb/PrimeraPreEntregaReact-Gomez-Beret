import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const {category} = useParams();


const [Items, setItems] = useState([]);

     useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const catFilter = Data.filter((item) => item.category === category);
  return (
    <div>
      {category ? <ItemList items={catFilter} /> : <ItemList items={Data} />}
    </div>
  );
};

export default ItemListContainer;