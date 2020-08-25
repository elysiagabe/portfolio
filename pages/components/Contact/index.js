import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <h2>Get In Touch</h2>
            <p>Let's connect! I'd love to get to know you over coffee or email. Feel free to fill out the form below, and I'll get back to you within 24 hours.</p>
            <ContactForm />

            <style jsx>{`
                .contact-container {
                    max-width: 1400px;
                    margin: 120px auto 0;
                }

                .contact-container h2 {
                    font-size: 2.8rem;
                    text-align: center;
                    font-weight: 400;
                }

                .contact-container p {
                    font-size: 1.2rem;
                    text-align: center;
                    font-style: italic;
                    width: 90%;
                    margin: 0 auto;
                }

                @media(min-width: 480px) {
                    .contact-container p {
                        font-size: 1.4rem;
                    }
                }

                @media(min-width: 768px) {
                    .contact-container p {
                        width: 70%;
                    }
                }
            `}</style>
        </section>
    )
}

export default Contact;