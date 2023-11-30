import React from 'react';
import Footer from "../Footer";

const styles = {
    img: {
        maxWidth: '20%',
        height: 'auto',
    },
}

export default function About() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="row">
                <img className="col img-fluid" style={styles.img} src='./images/profile.jpeg' alt="Profile Picture" />
                <p className="col text-wrap">
                    I have a Bachelor's of Science in Electrical Engineering from University of Illinois at Chicago. I am currently an Electrical Engineer at Northrop Grumman with a variety of experience in Systems Engineering, Software and Hardware. 

                    I am currently a student at the Northwestern Coding Bootcamp and seeking a career in web development.
                </p>
            </div>
            <Footer />
        </div>
    )
}