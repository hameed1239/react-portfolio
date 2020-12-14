import React from "react";

function About(props) {
    const { pages, setCurrentPage } = props;

    return (
        <div className="about">
            <img className="width-25" id="display-picture" src={require("../../assets/DisplayPicture.jpg").default} alt="Hameed" />
            <h3 id="elevator-pitch" className="align-left">Experienced full-stack engineer with a passion for simple yet thoughtful UI. Currently focused on the MERN Stack and AWS</h3>
            <p className="m-1-5em align-left">When I'm not writting code or solving a problem, you would find me playing FIFA on PS5, cooking or watching movies with my family. I also love traveling and seeing new places. As a full-stack engineer, I enjoy turning complex problems into simple user friendly applications.<span className="link" onClick={() => { setCurrentPage(pages[1]) }}>See my work</span> </p>
            <div className="flex-row flex-center focus">
                <img className="width-25 mern clip-polygon" src={require("../../assets/mongo.png").default} alt="mongoDB" />
                <img className="width-25 mern clip-polygon" src={require("../../assets/express.png").default} alt="expressJS" />
                <img className="width-25 mern clip-polygon" src={require("../../assets/react.png").default} alt="react" />
                <img className="width-25 mern clip-polygon" src={require("../../assets/node.png").default} alt="nodeJS" />
                <img className="width-25 mern clip-polygon" src={require("../../assets/aws.png").default} alt="aws" />
            </div>
        </div>
    )
}

export default About;