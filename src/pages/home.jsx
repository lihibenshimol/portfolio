import { useState } from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { Link } from "react-router-dom";
import { About } from '../cpms/about';
import { DynamicCmp } from '../cpms/dyn-cmp';
import { Project } from '../cpms/project';
import '../lib/animate.css'
import { ContactForm } from '../cpms/contact-form';


export function Home() {
    const [type, setType] = useState('about')
    const [contactPopup, toggleContactPopup] = useState(false)

    function handleClickScroll(cmp) {
        setType(cmp)
        const element = document.getElementById('cmp');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                scrollMode: 'if-needed',
                scrollSnapType: 'y mandatory',
                scrollSnapDestination: '0% 100%',
                snapType: 'start'
            });
            // element.scrollIntoView({ behavior: 'smooth' });
        }
    }



    return (
        <>
            <header className="app-header main-container">

                <div className="pages">

                    <div className="btn-scroll" onClick={() => handleClickScroll('about')}>
                        About
                    </div>

                    <div className="btn-scroll" onClick={() => handleClickScroll('project')}>
                        Projects
                    </div>

                    <div className="btn-scroll" onClick={() => toggleContactPopup(!contactPopup)}>
                        Contact
                    </div>


                </div>
            </header>
            <main className="home">
                <div className="intro">
                    <h2 className='animate__animated animate__fadeIn'> Hi, I'm <hr /></h2>
                    <h1 className="stroke shadow name animate__animated animate__fadeInLeftBig">Lihi Ben Shimol</h1>
                </div>


                <div className="contact animate__animated animate__fadeInLeftBig">
                 
                    <a
                        href="https://github.com/lihibenshimol"
                        target="_blank"
                        rel="noopener noreferrer"
                        title='Github'
                    >
                        <BsGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lihi-ben-shimol/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title='Linkedin'
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href="https://wa.me/+972542390294"
                        target="_blank"
                        rel="noopener noreferrer"
                        title='Whatsapp'
                    >
                        <BsWhatsapp />
                    </a>
                    <Link to='#'
                        onClick={(e) => {
                            window.location.href = "mailto:lihibs26@gmail.com";
                            e.preventDefault();
                        }} >
                        <SiGmail />
                    </Link>
                </div>
            {contactPopup && <ContactForm toggleContactPopup={toggleContactPopup}/>}


            </main>

                <DynamicCmp type={type} />

        </>
    )
}