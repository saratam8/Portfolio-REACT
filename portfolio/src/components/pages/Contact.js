import React from 'react';
import Footer from "../Footer";

export default function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <p>Email: stam296@gmail.com</p>
            <form>
                <div className="form-group">
                    <label for="inputName">Name</label>
                    <textarea className="form-control" id="name" rows="1"></textarea>
                </div>
                <div className="form-group">
                    <label for="inputEmail">Email Address</label>
                    <textarea className="form-control" id="email" rows="1"></textarea>
                </div>
                <div className="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
            </form>
            <Footer />
        </div>
    )
}