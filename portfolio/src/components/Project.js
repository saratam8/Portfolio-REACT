import React from 'react';

const projects = [
    {
        name: 'MongoDB - Socializing Hermit',
        url: 'https://github.com/saratam8/Socializing-Hermit',
        imgsrc: './images/flower.jpg',
    },
    {
        name: 'mySQL - Employee Tracker',
        url: 'https://github.com/saratam8/SQL-Employee-Tracker',
        imgsrc: './images/flower.jpg',
    },
    {
        name: 'Zen4You',
        url: 'https://github.com/Project01Team03/Zen4You',
        imgsrc: './images/Zen4You.png',
    },
    {
        name: 'RecipeDB',
        url: 'https://github.com/recipe-db-chicago-chefs/Project2',
        imgsrc: './images/flower.jpg',
    },
    {
        name: 'Weather Dashboard',
        url: 'https://github.com/saratam8/Weather-Dashboard-Application',
        imgsrc: './images/Weather Dashboard.png',
    },
    {
        name: 'Password Generator',
        url: 'https://github.com/saratam8/Password-Generator',
        imgsrc: './images/Password Generator.png',
    },
]

function Project() {
    return (
        <div className="container">
            <h1>Projects:</h1>
            <ul className="row">
                {projects.map((project) => (
                    <a href={project.url} className="col-6" target="_blank">
                        <img src={project.imgsrc} alt={project.name} className="img-fluid img-thumbnail" ></img>
                    </a>
                ))}
            </ul>
        </div>
    )

}

export default Project;