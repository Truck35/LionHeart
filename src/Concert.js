import React, {useState, useEffect} from 'react';
import './concert.css';
import concert_image from "./NewDemoWebPage/aaron-paul-wnX-fXzB6Cw-unsplash.jpg";
import Menu from './Menu';
import $ from 'jquery';

const Concert = (props) => {
 
  return (
    <div>
    <div className="concert-container">
       <div className="concert-header-container"> <h1 className="concert-format concert-header">CONCERTS</h1></div>
       
        <h2 className="concert-format">Let us book your venue</h2>
        <div className="concert-info-container">
        <div className=/*"concert-image-div-container"*/"container-fluid">
            <div className="row blue">
                <div className="col-md-4 blue column-height">
                <div className="layer-div-concert">
            <div className={props.runEffect ? "concert-text-container1 slide-right" : "concert-text-container1"}>
                <h3 className="concert-text-header">SAMPLE TEXT1</h3>
                <p>Duis at congue arcu. Vivamus eget nunc arcu. Cras dictum, justo vitae consectetur euismod, ipsum ipsum porta enim, non iaculis magna urna sed justo. Nunc maximus magna ac. </p>
            </div>
            </div>
            </div>
            <div className="col-md-4 blue column-height">
        <div className={props.runEffect ? "concert-image-div fadeIn" : "concert-image-div"}><img src={concert_image} width="100%" height="100%"/></div>
        </div>
        <div className="col-md-4 blue column-height">
            <div className="layer-div-concert">
        <div className={props.runEffect ? "concert-text-container2 slide-left" : "concert-text-container2"}>
                <h3 className="concert-text-header">SAMPLE TEXT2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, justo eu pellentesque pretium, ipsum risus gravida justo, in efficitur felis felis nec nisi. Duis in enim et libero consequat rhoncus et ut ex. Integer mauris nibh, mollis commodo mi eu, pharetra convallis ex. Pellentesque habitant morbi tristique senectus et netus et</p>
            </div>
            </div>
            </div>
            </div>
            
    </div>
       </div>
    </div>
   
    </div>
  )
}

export default Concert