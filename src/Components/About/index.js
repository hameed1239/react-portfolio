import React from "react";
import photo from "../../Assets/DisplayPicture.jpg";

function About() {
    

    return (
        <div className="about">
            <img className="width-25" id="display-picture" src={require("../../Assets/DisplayPicture.jpg").default} alt="Hameed" />
            <h3 id="elevator-pitch" className="align-left">Experienced full-stack engineer with a passion for simple yet thoughtful UI. Currently focused on the MERN Stack and AWS</h3>
            <p className="m-1-5em align-left">When I'm not writting code or solving a problem, you would find me playing FIFA on PS5, cooking or watching movies with my family. I also love traveling and seeing new places. As a full-stack engineer, I enjoy turning complex problems into simple user friendly applications. </p>
            <div className="flex-row flex-center focus">
                <img className="width-25 mern clip-polygon" src={require("../../Assets/mongo.png").default} alt="mongoDB" />
                <img className="width-25 mern clip-polygon" src={require("../../Assets/express.png").default} alt="expressJS" />
                <img className="width-25 mern clip-polygon" src={require("../../Assets/react.png").default} alt="react" />
                <img className="width-25 mern clip-polygon" src={require("../../Assets/node.png").default} alt="nodeJS" />
                <img className="width-25 mern clip-polygon" src={require("../../Assets/aws.png").default} alt="aws" />
            </div>
        </div>
    )
}

export default About;