import React from "react";
import "./ProductCards.css"
import "../media.css"
import ModalWindow from "../ModalWindow"

const ProductCards = props => {
    const {categories, names, prices, index} = props

    return (
        <div className="card_box" key={index}>
            <span className="card_category">{categories}</span>
            <h5 className="card_title">{names}</h5>
            <div className="card_box_element">
                <p className="card_price">{prices}</p>
                <ModalWindow index={index} name={names} price={prices} category={categories}/>
            </div>
        </div>
    )
};

export default ProductCards;