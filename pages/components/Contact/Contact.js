import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <h2>Get In Touch</h2>
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
            `}</style>
        </section>
    )
}

export default Contact;