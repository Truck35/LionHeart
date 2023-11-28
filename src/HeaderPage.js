import React, {useState, useEffect} from 'react';
import './headerPage.css';
import Border from "./NewDemoWebPage/pTqrEngjc.png";
import {Link} from 'react-router-dom';
import Concert from "./Concert";
import Menu from "./Menu";
import Music from "./NewDemoWebPage/Lion_Heart_Demo_Website.mp3";
import Film from "./Film";
import ArtistSearch from "./ArtistSearch";
import $ from 'jquery';


export default function HeaderPage() {

const [runEffectConcert, setRunEffectConcert] = useState(false);
const [runEffectFilm, setRunEffectFilm] = useState(false);
const [runEffectArtist, setRunEffectArtist] = useState(false);



  window.addEventListener("scroll",()=>{
    let concertTop = $('.concert-container').offset().top - $(window).scrollTop();
    let filmTop = $('.film-container').offset().top - $(window).scrollTop();
    let artistTop = $('.artist-search-container').offset().top - $(window).scrollTop();
    if( (concertTop <= 0) )
    {

    setRunEffectConcert(true);
    //$(".containerDiv").css("background-attachment","scroll");
    $(".concert-container").css("background-attachment","fixed");
    }
    else{
      $(".concert-container").css("background-attachment","scroll");
    }
   if(filmTop <= 0){
      $(".background-film-image").css("background-attachment","fixed");
          setRunEffectFilm(true);
    } 
    else {
      $(".background-film-image").css("background-attachment","scroll");
      
    }
    if(artistTop <= 0){
      $(".film-container").css("background-attachment","fixed");
          setRunEffectArtist(true);
    } else{
      $(".film-container").css("background-attachment","scroll");
    }

  
    
   

/* let number = window.scrollY;
  

   console.log(number);*/
});
  
//1406
  return (
    <div >
        <div className="containerDiv" >
            <audio id="audio" autoPlay>
                <source src={Music} type="audio/mpeg"/>
            </audio>
            
        </div>
        <div className="layer-6 fadeOut parallax-layer-1">

        </div>
        <div className="layer-5 parallax-layer-2">

        </div>
        <div className="layer-4 parallax-layer-3">

        </div>
        <div className="layer-3 parallax-layer-4">
            <div className="image-credit-info"><a href="https://www.freepik.com/free-photo/portrait-lion-ai-generated-47072733.htm#query=lion&position=0&from_view=keyworld&track=sph">Image by vwalakte</a> on Freepikn</div>

        </div>
        <div className="layer-2 parallax-layer-5">

        </div>
        <div className="layer-1 parallax-layer-6">
        <h2 id="work" className="subTitle">ENTERTAINMENT</h2>

        </div>
        <Menu/>
        <Concert runEffect = {runEffectConcert}/>
        <Film runEffect = {runEffectFilm}/>
        <ArtistSearch runEffect = {runEffectArtist}/>
    </div>
  );
}
