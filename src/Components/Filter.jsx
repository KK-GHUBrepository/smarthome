import React, { Component } from 'react';
import Iconheatingsvg from './Img/Iconheatingimg.svg';
import Iconlightssvg from './Img/Iconsmartlight.svg';
import Iconplugssvg from './Img/Iconsmartplug.svg';

class Filter extends Component {
  render() {
    return (
      <section className="Filter">
         <div idName="Filter1">
            <button className="Iconsvg">
                <img src={Iconheatingsvg} alt="icon heating"></img>
            </button>            
            <button className="Iconsvg">
                <img src={Iconlightssvg} alt="icon light"></img>
            </button>        
            <button className="Iconsvg">
                <img src={Iconplugssvg} alt="icon light"></img>
            </button>                  
         </div>
         <div idName="Filter2">    
            <button className="Statusbutton">All</button>
            <button className="Statusbutton">On</button>
            <button className="Statusbutton">Off</button>           
         </div>    
      </section>
    );
  }
}

export default Filter;