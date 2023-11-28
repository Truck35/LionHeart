import React from 'react';
import './menu.css';
import './film.css';
import film_image from './NewDemoWebPage/jakob-owens-0qLXyEKKPMM-unsplash.jpg';
//import filmImage from './NewDemoWebPage/film-image_bottom.png'; 

const Film = (props)=>{
    return(
        <div className="film-container">
            <div className={props.runEffect ? "background-film-image": "background-film-image_off"}>
                
                
           </div>
           <div className={props.runEffect ? "film-image-bottom-div":"film-image-bottom-div_off"}></div>
           <div className={props.runEffect ? "layer-div":"layer-div_off"}><div className={props.runEffect ? "film-image-top-div" : "film-image-top-div_off"}></div></div>
           <div className={props.runEffect ? "content-div movie-board-fadeIn":"content-div"}>
                <div className="header-div">
                    <div className="header-text">
                    <h1 className="film-header">FILM PRODUCTION MANAGEMENT</h1>
                    </div>
                    <div className="film-content-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 film-column-height blue">
                                <div className="film-layer">
                                <div className={props.runEffect ? "film-text-div1":""}> 
                                    <h2 className="h2-center">SAMPLE TEXT 1</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien tellus, auctor at neque a, vestibulum sagittis velit. Quisque egestas sapien justo, nec aliquet lorem varius non. Pellentesque gravida enim risus, id molestie turpis imperdiet hendrerit. Aliquam ut nibh porttitor, consectetur sapien eget, iaculis nulla. Nam pellentesque, purus sed volutpat condimentum, risus massa elementum enim, eget semper elit eros eget neque.</p>

                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 film-column-height blue">
                                <div className="film-image-div">
                                    <img src={film_image} alt="studio film camera" width="100%" height="100%"/>
                                </div> 
                            </div>
                            <div className="col-lg-4 film-column-height blue">
                            <div className="film-layer">
                                <div className={props.runEffect ? "film-text-div2":""}> 
                                    <h2 className="h2-center">SAMPLE TEXT 2</h2>
                                    <p>Integer mollis risus nisl, a lacinia erat bibendum sed. Phasellus egestas commodo ex, efficitur volutpat nulla tempor et. Nam et porta arcu. Nunc vitae odio enim. Mauris scelerisque sapien eu interdum volutpat.</p>

                                </div>
                                </div>
                            </div>
                            <div className="film-format-div"></div>
                        </div>

                    </div>
                
                </div>
                </div>
           </div>
    </div>

    );
}
export default Film;