import React from 'react';
import Footer from "../Footer";

const styles = {
    img: {
        width: '30%',
        height: '30%'
    },
}

export default function About() {
    return (
        <div>
            <h1 className="py-2">About Me</h1>
            <img className="rounded" style={styles.img} src="./images/profile.jpeg" alt="" />
            <p className="py-4">
                I have a Bachelor's of Science in Electrical Engineering from University of Illinois at Chicago. I am currently an Electrical Engineer at Northrop Grumman with a variety of experience in Systems Engineering, Software and Hardware. 

                I am currently a student at the Northwestern Coding Bootcamp and seeking a career in web development.
            </p>
            <Footer />
        </div>
    )
}