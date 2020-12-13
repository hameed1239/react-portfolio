import React from "react";


function Nav() {
    

    return (
        <header className="flex-row px-1 space-between">
            
            <h1 className="my-name">
                    Hameed
            </h1>
            <nav className="flex-row ">
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Nav;