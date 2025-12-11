import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer.jsx';

export default function Contact() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMessage, setUserMessage] = useState("");



    const phoneNumber = "201007634616"; // ← حط رقمك هنا بدون +

    function handleSubmit(e) {
        e.preventDefault();

        const finalMessage = 
`New Contact Message:
Name: ${userName}
Phone: ${userPhone}
Email: ${userEmail}
Message: ${userMessage}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

        window.open(url, "_blank");
    }

    return (
        <>
        {/*  craete contact form contains from name , email , phone , message and submit button */}

        <section className="contact pb-5">
            {/* adding phone and message fields and change inputs values using useState */}
            <div className="container my-5">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" 
                    value={userName} onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} placeholder="Enter your message"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <button type="submit" className="btn btn-outline-success">Send On Whatsapp</button>
            </form>
        </div>
        </section>
        <Footer />
        </>
    );
}