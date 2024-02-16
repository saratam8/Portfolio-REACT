import React from 'react';

const styles = {
    card: {
        width: '18rem',
        backgroundColor: '#bbcddd',
    },
    cardButton: {
        backgroundColor: '#3f6ca4',
        color: '#fffdf7',
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

const projects = [
    {
        name: 'Ullr\'s Tavern',
        url: 'https://ullrs-tavern-project-fb351eedb115.herokuapp.com/',
        imgsrc: './images/Ullrs Tavern.png',

    },
    {
        name: 'Zen4You',
        url: 'https://saratam8.github.io/Zen4You/index.html',
        imgsrc: './images/Zen4You.png',
    },
    {
        name: 'Weather Dashboard',
        url: 'https://saratam8.github.io/Weather-Dashboard-Application/',
        imgsrc: './images/Weather Dashboard.png',
    },
    {
        name: 'Password Generator',
        url: 'https://saratam8.github.io/Password-Generator/',
        imgsrc: './images/Password Generator.png',
    },
    {
        name: 'RecipeDB',
        url: 'https://recipe-db-ca6c65e5eb24.herokuapp.com/login',
        imgsrc: './images/recipeDB.png',
    },
    {
        name: 'MongoDB - Socializing Hermit',
        url: 'https://github.com/saratam8/Socializing-Hermit',
        imgsrc: './images/Socializing Hermit.PNG',
    },
]

function Project() {
    return (
        <div className="container">
            <h1>Projects:</h1>
            <div className="row align-middle">
                
                    {projects.map((project) => (
                        <div className="card m-2" style={styles.card} key={project.name}>
                        <img src={project.imgsrc} className="card-img-top py-2" alt={project.name} style={styles.image} />
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href={project.url} className="btn" style={styles.cardButton} target="_blank">Project Link</a>
                        </div>
                        </div>
                    ))}
                
            </div>

        </div>
    )

}

export default Project;