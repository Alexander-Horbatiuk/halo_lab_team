import React from 'react';
import Modal from 'react-modal';
import "./ModalWindow.css";
import "../../media.css"
import ModalForm from "../ModalForm";

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
        overflow: 'visible',
    },
};

const ModalWindow = ({showModalOpen, modalIsOpen, showModalClose, contentModal}) => {

    return (
        <>
            <Modal
                addClick={showModalOpen}
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <ModalForm names={contentModal} prices={contentModal} onClick={showModalClose} categories={contentModal} />
            </Modal>
        </>
    );
}

export default ModalWindow;