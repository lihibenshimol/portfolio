import '../lib/animate.css'
import cv from '../assests/img/CV.pdf'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


export function ContactForm({ toggleContactPopup }) {
    const form = useRef()
    const [msg, showMsg] = useState(false)

    const sendEmail = (e) => {
        showMsg(false)
        e.preventDefault()

        emailjs.sendForm('service_fvfu8sq', 'template_ed4u1sk', form.current, 'BoY2LAzIgsVT8ZLts')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        showMsg(!msg)

    }

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(cv).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = cv;
                alink.click();
            })
        })
    }


    return (
        <>
            <div className='black-bg' onClick={() => toggleContactPopup(false)}></div>

            <div className="contact-form animate__animated animate__fadeInUp">
                <form ref={form} onSubmit={sendEmail} >
                    <h1>Let's get in touch!</h1>
                    <label>Name</label>
                    <input type="text" required name="from_name" />
                    <label>Email</label>
                    <input type="email" required name="from_email" />
                    <label>Message</label>
                    <textarea name="message" />

                    <div className='actions'>
                        <button>Send</button>
                        <button type='button' onClick={onButtonClick} >Get my CV</button>
                    </div>

                </form>
                {msg && <h2>Message sent!</h2>}
            </div>

        </>
    )
}