import './App.css';
import React, {useContext, useState} from "react";
import ModalWindow from "./Component/ModalWindow";
import {DataContext} from "./DataContext"
import RenderCards from "./Component/RenderCards";

function App() {
    const [modal, setModal] = useState(false);
    const [contentModal, setContentModal] = useState()

    const  modalOpen = ({category, price, name }) => {
        setModal(true)
        return setContentModal({
            name: name,
            price: price,
            category: category
        })
    }

    const modalClose = () => setModal(false);
    const contextData = useContext(DataContext).map(ref => ref).reduce((prev, curr) => prev.price > curr.price ? 'null' : curr, 0);

    const showModalMinValue = () => {
        modalOpen(false);
        setContentModal(contextData)

        return (
            <>
                <ModalWindow modalIsOpen={modal} showModalOpen={modalOpen} showModalClose={modalClose} contentModal={contentModal} />
            </>
        );
    }

    return (
        <div className="App">
            <header className="app_header">
                <span>Welcome</span>
            </header>
            <main className="main">
                <section className="cards_content">
                    <RenderCards onCardClick={modalOpen}/>
                </section>
                <button onClick={showModalMinValue} className="card_button_min_value">Buy cheapest</button>
            </main>
            <ModalWindow modalIsOpen={modal} modalOpen={modalOpen} closeModal={modalClose} contentModal={contentModal}/>
        </div>
    );

}

export default App;
