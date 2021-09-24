import React, {useContext} from "react";
import "../Card/Card.css"
import "../../media.css"
import Card from "../Card";
import {DataContext} from "../../DataContext"

const RenderCards = ({onCardClick}) => {
    const cards = useContext(DataContext)

    return (
        <>
            {cards.map((card, index) => Card(card, index, onCardClick))}
        </>
    )
};

export default RenderCards;