import React, { Component } from 'react';
import Iconheatingsvg from './Img/Iconheatingimg.svg';
import Iconlightssvg from './Img/Iconsmartlight.svg';
import Iconplugssvg from './Img/Iconsmartplug.svg';

class Devices extends Component {
constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false
    }
}

componentDidMount() {
    fetch('https://api.myjson.com/bins/6urls')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        });
}

render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <div className="Devices">            
            
                {items.map(item => (
                        <a  onClick={layerpopup} className="Singledevicelink" key="{item.deviceType}">
                             <div className="Singledevice">         
                                {(function() {
                                switch(item.deviceType) {
                                case 'heater':
                                    return <img src={Iconheatingsvg} alt="icon heating"></img>;
                                case 'light':
                                    return <img src={Iconlightssvg} alt="icon light"></img>;
                                case 'plug':
                                    return <img src={Iconplugssvg} alt="icon light"></img>;
                                default:
                                    return null;
                                }
                                })()}

                                <p><b>Name: </b>{item.name} </p>
                                <p><b>Status: </b>{item.state == 1 ? 'ON' : 'OFF'} </p>


                            </div>
                        </a>
                ))}
          
        </div>
    );
}

}

export default Devices;
