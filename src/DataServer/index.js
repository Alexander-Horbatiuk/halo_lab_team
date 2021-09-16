import React, {useState, useEffect} from "react";
import "./DataServer.css"
import "../media.css"
import ProductCards from "../ProductCards";

const DataServer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
            .then(res => res.json())
            .then(result => setItems(result))
    }, [])

    const cards = items.map((item, index) => {
        return (
            <>
                <ProductCards
                    index={index}
                    categories={item.category}
                    names={item.name}
                    prices={item.price}
                />
            </>
        )
    });

    return (
        <>
            {cards}
        </>
    )
};

export default DataServer;