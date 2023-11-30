import React from 'react';

const styles = {
    text: {
        color: 'black',
    },
    email: {
        fontWeight: 'bold',
    },
}

function Footer() {
    return (
        <div>
            <div className="py-4 card-footer text-body-secondary justify-content-center d-flex">
                <a className="col-1 text-decoration-none justify-content-center d-flex" style={styles.text} href="https://github.com/saratam8" target="_blank">GitHub</a>
                <a className="col-1 text-decoration-none justify-content-center d-flex" style={styles.text} href="https://www.linkedin.com/in/sara-tam3/" target="_blank">LinkedIn</a>
            </div>
            <div className="row">
                <p className="col text-decoration-none justify-content-center d-flex" style={styles.text}><span style={styles.email}>Email: </span><span>&nbsp;</span> stam296@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer;