import React from "react";

function Footer() {
    let year = new Date();
    year = year.getFullYear();
    
    return (
        <div className="align-center footer">
            <p>{`© ${year} Hameed Kazeem`}</p>
        </div>
    )
}

export default Footer