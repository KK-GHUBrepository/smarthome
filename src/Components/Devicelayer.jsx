import React, { Component } from 'react';

class Devicelayer extends Component {
  render() {
    return (
                       
    <div className="Singledeviceoverlay">  
        <p>Name: {item.name} </p>
        <p>Status: {item.deviceType} </p>
        <p>Status: {item.vendor} </p>
        <p>Status: {item.state == 1 ? 'ON' : 'OFF'} </p>
    </div>   

    );
  }
}

export default Devicelayer;





                         