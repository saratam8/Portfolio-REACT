import React from 'react';

const styles = {
    active: {
        textColor: '#adf7b6',
        background: '#fcf5c7'
    }
}

function Navigation({ currentPage, handlePageChange }) {
    return (
        // <ul className="nav nav-pills nav-justified">
        // <li className="nav-item">
        //     <a
        //     href="#about"
        //     onClick={() => handlePageChange('About')}

        //     className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        //     >
        //     About
        //     </a>
        // </li>
        // <li className="nav-item">
        //     <a
        //     href="#portfolio"
        //     onClick={() => handlePageChange('Portfolio')}

        //     className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        //     >
        //     Portfolio
        //     </a>
        // </li>
        // <li className="nav-item">
        //     <a
        //     href="#contact"
        //     onClick={() => handlePageChange('Contact')}

        //     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        //     >
        //     Contact
        //     </a>
        // </li>
        // <li className="nav-item">
        //     <a
        //     href="#resume"

        //     onClick={() => handlePageChange('Resume')}
        //     className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        //     >
        //     Resume
        //     </a>
        // </li>
        // </ul>
        <ul className="nav justify-content-center d-flex">
        <li className="nav-item">
          <a aria-current="page" href="#about" onClick={() => handlePageChange('About')} className = {currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </li>
        <li class="nav-item">
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li>
        <li class="nav-item">
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </li>
        <li class="nav-item">
          <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </li>
      </ul>
    );
}

export default Navigation;