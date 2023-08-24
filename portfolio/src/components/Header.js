import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

const styles = {
    header: {
        background: "#ffb770",
    },
    nav: {
        background: "#ffb770",
    },
};

function Header() {
    const [currentPage, setPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setPage(page);

    return (
        <div style={styles.header}>
            <header>
                <h1>Sara Tam</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </header>
        </div>
    );
}

export default Header;