import React from "react";

const Resume = () => {
    
    return (
        <>
            <p>Download a copy of my resume <a href="https://drive.google.com/u/0/uc?id=1eMGYINOP4E8Y8qWFB5c1wHUKWT8AecCt&export=download" target="_blank" rel="noreferrer">here</a></p>
            <img className="resume" alt="Resume" src={require(`../../assets/Resume.svg`).default} />
            </>
    )
}

export default Resume;