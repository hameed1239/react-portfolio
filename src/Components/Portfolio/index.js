import React, { useState } from 'react';

function Portfolio() {
    const projects = [
        {
            name: "Photo Portfolio",
            repo: "https://github.com/hameed1239/photo-port",
            appURL: "https://hameed1239.github.io/photo-port/",
            description: "A single page application built with react to showcase the works of renowned photopgrapher Lyza"
        },
        {
            name: "Budget Tracker",
            repo: "https://github.com/hameed1239/budget-tracker",
            appURL: "https://budget-tracker-hameed1239.herokuapp.com/",
            description: "A full-stack budget tracker that combines the power of html, css, Javascript, Node, MongoDB, and Express"
        },
        {
            name: "Password Generator",
            repo: "https://github.com/hameed1239/password-generator",
            appURL: "https://hameed1239.github.io/password-generator/",
            description: "A front-end password generator you can trust"
        },
        {
            name: "Note Taker",
            repo: "https://github.com/hameed1239/note-taker",
            appURL: "https://note-taker-hameed1239.herokuapp.com/",
            description: "A full-stack note taking application"
        },
        {
            name: "Weather Dashboard",
            repo: "https://github.com/hameed1239/weather-dashboard",
            appURL: "https://hameed1239.github.io/weather-dashboard/",
            description: "A front-end application that forcast the weather condition of a given city over a 5-day period"
        },
        {
            name: "Work day Scheduler",
            repo: "https://github.com/hameed1239/work-day-scheduler",
            appURL: "https://hameed1239.github.io/work-day-scheduler/",
            description: "A front-end application that uses your browsers local storage to keep track of activities you need to accomplish for the day"
        }
    ]
    const [selectedProject, setSelectedProject] = useState({
        name: "",
        repo: "",
        appURL: "",
        description: "",
        isOpen: false
    });
    const toggleInfoOpen = (project, i) => {
        setSelectedProject({ ...project });
        selectedProject.isOpen = !selectedProject.isOpen;
    }
    return (
        <div className="flex-row flex-center space-between container">


            {projects.map((project, i) => {
                return (
                    <div className="card" key={project.name}>
                        <div className="card-inner">
                            <div className="card-front flex-row flex-a-c" onClick={() => { toggleInfoOpen(project) }}  >

                                <img className="img-thumbnail" src={require(`../../assets/projects/${i}.JPG`).default} alt={`project No. ${i}`} />
                            </div>
                            <div className="card-back flex-row flex-a-c">
                                <h2 className="align-center display-block">{project.name}</h2>
                                <div className="container flex-row space-between">
                                    <a href={project.appURL} rel="noreferrer" target="_blank"><img className="link-icon" src={require(`../../assets/app image.jpg`).default} alt="Live Application" /></a>
                                    <a href={project.repo} rel="noreferrer" target="_blank"><img className="link-icon" src={require(`../../assets/github.png`).default} alt="Repository" /></a>
                                </div>
                                <p className="card-text align-center">{project.description}</p>
                            </div>
                        </div>
                    </div>
                )


            })}

        </div>
    )
}

export default Portfolio