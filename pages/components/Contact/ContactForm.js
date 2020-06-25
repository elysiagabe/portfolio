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
            ? <p>Thanks for reaching out! You'll hear from me within 1 business day. I look forward to chatting!</p>
            : 
                <>
                    <label htmlFor="name">Name *</label>
                    <input type="text" name="name" required />

                    <label htmlFor="_replyto">Email *</label>
                    <input type="email" name="_replyto" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />

                    <label htmlFor="message">Message</label>
                    <input type="textarea" name="message" required />

                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                    <input type="hidden" name="_subject" value="New Message!" />

                    <button type="submit">Submit</button>
                </>
            }

            {status === "ERROR" && <p>Oops! There was an error.</p>}
        </form>
    )
}

export default ContactForm;