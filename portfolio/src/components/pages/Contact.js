import React from 'react';
import Footer from "../Footer";

export default function Contact() {
    return (
        <div className="m-3">
            <h1 className="py-2">Contact</h1>
            <p>Email: stam296@gmail.com</p>
            <p>Phone Number: 312-714-9100</p>
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