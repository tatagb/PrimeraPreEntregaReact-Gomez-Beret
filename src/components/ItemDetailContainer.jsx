import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch (Data);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
            }

            fetchData()
        }, []);

        const itemFilter = Data.filter((item) => item.id == id);
        return (
            <div>
                {id ? <ItemDetail items={itemFilter} /> : <ItemDetail items={Data} />}
            </div>
        )
    };

export default ItemDetailContainer;