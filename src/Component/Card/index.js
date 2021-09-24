import React from "react";
import ModalWindow from "../ModalWindow"
import "./Card.css"

const Card = ({category, price, name }, index, onCardClick) => {

    const clickOpenModal = () => {
        onCardClick({category, price, name })
        return (
            <>
                <ModalWindow index={index} name={name} price={price} category={category}/>
            </>
        )
    }

    return (
        <div className="card_box" key={index}>
            <span className="card_category">{category}</span>
            <h5 className="card_title">{name}</h5>
            <div className="card_box_element">
                <p className="card_price">{price}</p>
                <button onClick={clickOpenModal} className="card_button">Buy</button>
            </div>
        </div>
    )
}

export default Card;