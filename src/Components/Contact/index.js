import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import emailjs from "emailjs-com";
require('dotenv').config();


function Contact() {
    const { REACT_APP_UserID } = process.env;
    console.log(REACT_APP_UserID);
    emailjs.init(REACT_APP_UserID);

    const computedName = "name"
    const [formState, setFormState] = useState({ [computedName]: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [emailStatus, setEmailStatus] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            if (e.target.value.length < 1) {
                setErrorMessage('Email is required.');
            }
            else {
                const isValid = (validateEmail(e.target.value));
                console.log(isValid);
                // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
            }

        }
        else if (e.target.name === 'message') {
            if (e.target.value.length < 1) {
                setErrorMessage('Message is required.');
            }
            else {
                setErrorMessage('');
            }
        }
        else if (e.target.name === 'name') {
            if (e.target.value.length < 1) {
                setErrorMessage('Name is required.');
            }
            else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        const templateParams = {
            "from_name": name,
            "message": message,
            "from_email": email
        }
        emailjs.send('service_zdl7opb', 'template_8pehn3p', templateParams)
            .then((response) => {
                setEmailStatus("Thanks for reaching out. I would be intouch with you shortly")
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                setEmailStatus("Oh oh! looks like those squirrels chewed on the wires again. Please try again")
                console.log('FAILED...', err);
            });
    }
    return (
        <section className=" flex-row align-center">
            {emailStatus && (
                <div className="error-text align-center display-block">
                    <h3>{emailStatus}</h3>
                </div>
            )}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="align-left">
                    <label htmlFor="name" className="display-block">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" minLength="1" required />
                </div>
                <div className="align-left">
                    <label htmlFor="email" className="display-block">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" required />
                </div>
                <div className="align-left">
                    <label htmlFor="message" className="display-block">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" required minLength="1" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text align-left">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>

    );
}

export default Contact;