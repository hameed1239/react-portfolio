import React from "react";

const PortfolioInfo = ({ portfolioImage, selectedProject })=> {
    
    const { name, repo, appURL, description } = selectedProject;
    return (
        <>
            <h3 className="align-center display-block">{name}</h3>
            <div className="container flex-row space-between">
                <a href={appURL} rel="noreferrer" target="_blank"><img className="link-icon" src={require(`../../assets/app image.jpg`).default} alt="Live Application" /></a>
                <a href={repo} rel="noreferrer" target="_blank"><img className="link-icon" src={require(`../../assets/github.png`).default} alt="Repository" /></a>
            </div>
            <p className="card-text align-center">{description}</p>
           </>
    )
}

export default PortfolioInfo;