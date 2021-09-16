import React, {useState} from "react";
import "./FormModalWindow.css"
import "../media.css"

const FormModalWindow = (props) => {
    const {names, prices, categories, onClick} = props

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [errorName, setErrorName] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)

    const validateName = (event) => {
        if (name === '') {
            setErrorName('This field in required')
            return false
        }
        if (!/^([^0-9]*)$/.test(event.target.value)) {
            setErrorName('Only letters allowed')
            return false
        }
        return setErrorName('')
    }

    const validatePhone = (event) => {
        if (phone === '') {
            setErrorPhone('This field in required')
            return false
        }
        if (!/^\d{1,}$/.test(event.target.value)) {
            setErrorPhone('Only numbers allowed')
            return false
        }
        if (!/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(event.target.value)) {
            setErrorPhone("Should contain 12 characters")
            return false;
        }
        return setErrorPhone('')
    }

    const submit = () => {
        if (!errorPhone === !errorName && name !== '' && phone !== '') {
            console.log( [prices, categories, names, name, phone])
            onClick()
        }
    }

    const clearInputNane = () => {
        setName('')
        setErrorName('')
    }

    const clearInputPhone = () => {
        setPhone('')
        setErrorPhone('')
    }

    return (
        <form className="modal_form" action="">
            <span className="card_category">{categories}</span>
            <p className="card_title">{names}</p>
            <p className="card_price">{prices}</p>


            <label className="error_label">
                {errorName? <span className="error_title">Error</span>: ''}

                {errorName && <span className="clear_input_button" onClick={clearInputNane}>+</span>}
                <input type="text"
                       value={name}
                       onBlur={validateName}
                       placeholder="Name"
                       className="modal_form_input"
                       onChange={e => setName(e.target.value)}
                />
                {errorName? errorName: ''}
            </label>

            <label className="error_label">
                {errorPhone?  <span className="error_title">Error</span> : ''}
                {errorPhone ? <span className="clear_input_button" onClick={clearInputPhone}>+</span>: null}
                <input
                    type="phone"
                    value={phone}
                    placeholder="Number"
                    className="modal_form_input"
                    onBlur={validatePhone}
                    onChange={e => setPhone(e.target.value)}
                />
                {errorPhone? errorPhone: ''}
            </label>

            <button className="card_button_close" onClick={onClick}>+</button>

            <div onClick={submit} className="modal_form_button">
                Order
                {!errorPhone === !errorName && name !== '' && phone !== ''?<svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m4.16663 10h11.66667"/><path d="m10 4.16666 5.8333 5.83333-5.8333 5.83331"/></g></svg>: null}
            </div>
        </form>
    )
};

export default FormModalWindow;