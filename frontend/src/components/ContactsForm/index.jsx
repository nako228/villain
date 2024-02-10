import "./style.scss"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactsForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",

    })

    const templateParams = {
        from_name: form.name,
        email: form.email,
        number: form.number,
    };

    function MemoryFn(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function sendEMailJS_Fn(e) {
        e.preventDefault()                                                   
        emailjs.send('service_5a52nkx', 'template_meqjc4m', templateParams, 'ZjF7BDfjSmoc1S45L')
        .then((response) =>{ toast.success('SUCCESS!',{ theme: "dark" });},(err) => {toast.error('FAILED...', { theme: "dark" }); 
        });
    }
    return (
        <div className="contancts-f-wrapper">
            <form onSubmit={sendEMailJS_Fn}>
                <div className="contacts-f-content">
                    <h1>Остались вопросы?</h1>
                    <h3>Оставь заявку и мы ответим</h3>
                    <input
                        id="full-name-input" type="text"
                        placeholder="Имя"
                        onChange={MemoryFn} required
                    />
                    <input
                        id="number-input" type="text"
                        placeholder="Телефон"
                        onChange={MemoryFn} name='number' required
                    />
                    <input
                        id="email-input" type="email"
                        placeholder="Почта"
                        onChange={MemoryFn} name='email' required />

                    <button className="green-btn">Оставить заявку</button>
                </div>
            </form>
        </div>
    );
}

export default ContactsForm;