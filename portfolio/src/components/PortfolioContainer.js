import React, { useState } from 'react';
import Project from "./Project";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

const styles = {
    page: {
        backgroundColor: '#e9edc9',
    },
}

export default function PortfolioContainer() {
    return (
        <div>
            <Header />
        </div>
      );
}