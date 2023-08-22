import React, { useState } from 'react';
import Project from "./Project";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
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
        return <Contact />;
    };

    const handlePageChange = (page) => setPage(page);

    return (
        <div>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
}