import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    let year = new Date();
    year = year.getFullYear();
    
    return (
        <div className="flex-center footer flex-row space-between">
            <p>{`© ${year} Hameed Kazeem`}  <a href="https://github.com/hameed1239" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a> <a href="https://www.linkedin.com/in/hameed-kazeem" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a> <a href="https://twitter.com/hameedokazeem?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></p>
            
            
        </div>
    )
}

export default Footer