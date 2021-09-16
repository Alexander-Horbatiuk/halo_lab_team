import React from 'react';
import Modal from 'react-modal';
import "./ModalWindow.css";
import "../media.css"
import FormModalWindow from "../FormModalWindow";

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
    },
    content: {
        borderRadius: '16px',
        border: 'none',
        maxWidth: '384px',
        height: '536px',
        width: '100%',
        position: 'static',
        // position: 'relative',
        overflow: 'visible',
    },
};

const ModalWindow = (props) => {
    const { name, price, category} = props

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const  openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button onClick={openModal} className="card_button">Buy</button>
            <Modal
                addClick={openModal}
                isOpen={modalIsOpen}
                style={customStyles}
            >
                {/*<button className="card_button_close" onClick={closeModal}>+</button>*/}
                <FormModalWindow names={name} prices={price} onClick={closeModal} categories={category} />
            </Modal>
        </>
    );
}

export default ModalWindow;