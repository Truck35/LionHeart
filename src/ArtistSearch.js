import React, {useEffect} from 'react';
import './artistSearch.css';
import './fonts/iconly.css';
import $ from 'jquery';


const ArtistSearch = (props) => {

  const cel_1 = props.runEffect ? "cel-1":"";
  const cel_2 = props.runEffect ? "cel-2":"";
  const cel_3 = props.runEffect ? "cel-3":"";
  const cel_4 = props.runEffect ? "cel-4":"";

  const letter_M = props.runEffect ? "letter-M":"";
  const letter_U = props.runEffect ? "letter-U":"";
  const letter_S = props.runEffect ? "letter-S":"";
  const letter_I = props.runEffect ? "letter-I":"";
  const letter_C = props.runEffect ? "letter-C":"";

  return(
    <div className="outer-container">
  <div className="artist-search-container">
    
  <div className={cel_2} style={{top:"7",left:"15%"}}><span className="icon-868539_podcast-microphone-png2"/></div> 
  <div className={cel_3} style={{top:"15%",left:"3%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_2} style={{top:"15%",left:"18%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_4} style={{top:"25%",left:"10%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_1} style={{top:"39%",left:"7%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_2} style={{top:"35%",left:"20%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
   <div className={cel_3} style={{top:"65%",left:"3%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"49%",left:"15%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"65%",left:"23%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"15%",left:"29%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"50%",left:"29%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"7",left:"40%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"35%",left:"35%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"60%",left:"39%"}}><span className="icon-868539_podcast-microphone-png2"/></div>

  <div className={cel_2} style={{top:"17%",right:"50%"}}><span className="icon-868539_podcast-microphone-png2"/></div> 
  <div className={cel_2} style={{top:"45%",right:"50%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_2} style={{top:"7",right:"15%"}}><span className="icon-868539_podcast-microphone-png2"/></div> 
  <div className={cel_3} style={{top:"15%",right:"3%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_2} style={{top:"15%",right:"18%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_4} style={{top:"25%",right:"10%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_1} style={{top:"39%",right:"7%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_2} style={{top:"35%",right:"20%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
   <div className={cel_3} style={{top:"65%",right:"3%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"49%",right:"15%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"65%",right:"23%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"15%",right:"29%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"50%",right:"29%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"7",right:"40%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"35%",right:"35%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className={cel_3} style={{top:"60%",right:"39%"}}><span className="icon-868539_podcast-microphone-png2"/></div>
  <div className="outer-format">
  <div className="letters-outer-container">
        <div className="letters-container"><div className={letter_M}>M</div ></div>
        <div className="letters-container"><div className={letter_U}>U</div></div>
        <div className="letters-container"><div className={letter_S}>S</div></div>
        <div className="letters-container"><div className={letter_I}>I</div></div>
        <div className="letters-container"><div className={letter_C}>C</div></div>
 </div>
 </div>
 {/*} <div className="music-header-container"><h1 className="music-header"><span>S</span><span>I</span><span>C</span></h1></div>*/}
</div>



  </div>
  );


  

}

export default ArtistSearch;
