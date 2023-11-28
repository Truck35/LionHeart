import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';
import Border from "./NewDemoWebPage/pTqrEngjc.png";

const Menu = ()=>{
    return(
        <div>
       
        <div className="Menu">
            <div className="Menu-container">
            <Link><div className="menu-item">SERVICES</div></Link><Link to="music"><div className="menu-item">MUSIC</div></Link><Link><div className="menu-item">BOOKINGS</div></Link><Link><div className="menu-item">ABOUT US</div></Link><Link><div className="menu-item">CONTACT US</div></Link>
            </div>
            <div className="fancy_line">
                <img src={Border} className="facy_line_image" alt="web page border" width="90%" height="100%" />
            </div>

        </div>
    </div>

    );
}
export default Menu;