import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState("");

    const submitForm = e => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR")
            }
        }
        xhr.send(data);
    }

    return (
        <form
            onSubmit={submitForm}
            action="https://formspree.io/xaypdyrk"
            method="POST"
        >
            {status === "SUCCESS"
            ? 
                <div className="form-success">
                    <p>Thanks for reaching out! I look forward to chatting with you.</p> <br />
                    <img src="/email_sent.png" alt="illustration of 3 envelopes" />
                </div>
            : 
                <>
                    <label htmlFor="name">Name *</label>
                    <input type="text" name="name" required />

                    <label htmlFor="_replyto">Email *</label>
                    <input type="email" name="_replyto" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />

                    <label htmlFor="message">Message *</label>
                    <textarea rows="10" name="message" required />

                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                    <input type="hidden" name="_subject" value="New Message!" />

                    <button type="submit">Submit</button>
                </>
            }

            {status === "ERROR" && <p>Oops! There was an error.</p>}

            <style jsx>{`
                form {
                    width: 70%;
                    margin: 20px auto 84px;
                }

                input, textarea {
                    width: 100%;
                    font-size: 1.4rem;
                    padding: 12px;
                    font-family: 'Avenir', 'Helvetica Neue', 'Roboto', sans-serif;
                    margin: 4px 0 24px;
                    border: 1px solid #333;
                    border-radius: 4px;
                    outline-color: #00857D;
                }

                textarea {
                    resize: vertical;
                }

                label {
                    font-size: 1.8rem;
                    margin: 15px 0;
                }

                .form-success {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding-bottom: 60px;

                }

                .form-success p {
                    font-size: 1.8rem;
                }

                .form-success img {
                    max-width: 530px;
                    display: block;
                }

                button {
                    background-color: #00857D;
                    color: #fff;
                    font-family: 'Avenir', 'Helvetica Neue', 'Roboto', sans-serif;
                    font-size: 1.8rem;
                    letter-spacing: 1px;
                    padding: 12px 32px;
                    border: none;
                    border-radius: 4px;
                    transition: .3s;
                }

                button:hover {
                    cursor: pointer;
                    background-color: #006660;
                }
            `}</style>
        </form>
    )
}

export default ContactForm;