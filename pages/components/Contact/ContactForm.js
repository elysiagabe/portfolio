import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState();

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
            ? <p>Thanks for reaching out! I'll get back to you within 1 business day.</p>
            : 
                <>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Your name" />

                    <label htmlFor="_replyto">Email</label>
                    <input type="email" name="_replyto" placeholder="Your email" />

                    <label htmlFor="_subject">Subject</label>
                    <input type="text" name="_subject" placeholder="What's this about?" />

                    <label htmlFor="message">Message</label>
                    <input type="textarea" name="message" placeholder="Say hello..." />

                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                    <button type="submit">Submit</button>
                </>
            }

            {status === "ERROR" && <p>Oops! There was an error.</p>}
        </form>
    )
}

export default ContactForm;