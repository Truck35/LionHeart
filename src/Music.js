import React, {useState} from 'react';
import './headerPage.css';
import Border from "./NewDemoWebPage/pTqrEngjc.png";

const Music = ()=>{
    return(
        <div>
        
        <div className="Menu">
            <div className="Menu-container">
                <div className="menu-item">SERVICES</div><div className="menu-item">MUSIC</div><div className="menu-item">BOOKINGS</div><div className="menu-item">ABOUT US</div><div className="menu-item">CONTACT US</div>
            </div>
            <div className="fancy_line">
                <img src={Border} className="facy_line_image" alt="web page border" width="500px" height="100%" />
            </div>

        </div>
    </div>
    );
}
export default Music;