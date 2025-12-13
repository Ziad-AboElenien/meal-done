import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const phoneNumber = "201007634616";

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
        <section className="contact contact-section">
            <div className="container">
                {/* Header */}
                <div className="contact-header">
                    <h1>Get In Touch</h1>
                    <p>Have a question or want to work together? Feel free to reach out!</p>
                </div>

                <div className="row contact-content">
                    {/* Contact Info */}
                    <div className="col-lg-5 mb-4">
                        <div className="contact-info-card">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Location</h3>
                                    <p>Egypt, Cairo</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Email</h3>
                                    <p>contact@mealdone.com</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>WhatsApp</h3>
                                    <p>+20 100 763 4616</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="contact-social">
                            <h3>Follow Us</h3>
                            <div className="contact-social-links">
                                <a href="https://www.facebook.com/zezo.aboelenan" className="contact-social-link">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/ziad-elsayed-399aa62aa/" className="contact-social-link">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/ziad_3lsayed/" className="contact-social-link">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://github.com/Ziad-AboElenien" target="_blank" className="contact-social-link">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-7">
                        <div className="contact-form-card">
                            <form onSubmit={handleSubmit}>
                                <div className="contact-form-group">
                                    <label htmlFor="name" className="contact-form-label">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="contact-form-input"
                                        id="name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contact-form-group">
                                            <label htmlFor="email" className="contact-form-label">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="contact-form-input"
                                                id="email"
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="contact-form-group">
                                            <label htmlFor="phone" className="contact-form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="contact-form-input"
                                                id="phone"
                                                value={userPhone}
                                                onChange={(e) => setUserPhone(e.target.value)}
                                                placeholder="+20 123 456 7890"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="message" className="contact-form-label">
                                        Your Message
                                    </label>
                                    <textarea
                                        className="contact-form-textarea"
                                        id="message"
                                        value={userMessage}
                                        onChange={(e) => setUserMessage(e.target.value)}
                                        placeholder="Tell us what you need..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="contact-submit-btn">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    Send via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}