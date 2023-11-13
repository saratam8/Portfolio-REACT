import React from 'react';

function Footer() {
    return (
        // <div className="container">
            // <div className="row d-flex justify-content-center py-3">
            //     <a className="col-2 text-decoration-none" href="https://github.com/saratam8">GitHub</a>
            //     <a className="col-2 text-decoration-none" href="https://www.linkedin.com/in/sara-tam3/">LinkedIn</a>
            // </div>
        // </div> 
        <div class="card-footer text-body-secondary justify-content-center d-flex">
            <a className="col-1 text-decoration-none justify-content-center d-flex" href="https://github.com/saratam8">GitHub</a>
            <a className="col-1 text-decoration-none justify-content-center d-flex" href="https://www.linkedin.com/in/sara-tam3/">LinkedIn</a>
        </div>
    )
}

export default Footer;