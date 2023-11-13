import React from 'react';

const styles = {
    text: {
        color: 'black',
    },
}

function Footer() {
    return (
        <div className="py-4 card-footer text-body-secondary justify-content-center d-flex">
            <a className="col-1 text-decoration-none justify-content-center d-flex" style={styles.text} href="https://github.com/saratam8" target="_blank">GitHub</a>
            <a className="col-1 text-decoration-none justify-content-center d-flex" style={styles.text} href="https://www.linkedin.com/in/sara-tam3/" target="_blank">LinkedIn</a>
        </div>
    )
}

export default Footer;