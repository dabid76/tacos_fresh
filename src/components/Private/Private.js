import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Private.css'
import tacos from '../Private/tacos.jpg'


class Private extends Component {

    render() {
    return (
        <div className="contact">
            {/* <h2>
                Contact
            </h2> */}
            <div className="info">
            <h2>
                Information
            </h2>
                <p><a href="tel:651 777 3966">(651)777-3966</a></p>
                <p>Address: 3156 Century Avenue North, Mahtomedi, Minnesota 55110</p>
                <p>Hours: Sunday-Thursday 11AM-9PM ; Friday & Saturday 11AM-12AM</p>
                <p><a href="mailto:tacofreshfusion@yahoo.com" className="contact-link">tacofreshfusion@yahoo.com</a></p>
                <p><a href="https://www.facebook.com/tacosfreshasianfusionsportscantina/">Facebook</a></p>
            </div>
            <br/>
            <div className="info">
            <h2>
                Contact
            </h2>
                <p><a href="tel:651 777 3966">(651)777-3966</a></p>
                <p>Address: 3156 Century Avenue North, Mahtomedi, Minnesota 55110</p>
                <p>Hours: Sunday-Thursday 11AM-9PM ; Friday & Saturday 11AM-12AM</p>
                <p><a href="mailto:tacofreshfusion@yahoo.com" className="contact-link">tacofreshfusion@yahoo.com</a></p>
                <p><a href="https://www.facebook.com/tacosfreshasianfusionsportscantina/">Facebook</a></p>
            </div>
            <img src={tacos} className="picOne" />
            <img src={tacos} className="picTwo" />

            </div> 
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Private);