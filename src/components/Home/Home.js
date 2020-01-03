import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Home.css'

// import tacos from '../images/tacos.jpg'



class Home extends Component {
    menu = (propertyName) =>{
        console.log('this is happening', propertyName)
        if (propertyName === 'Food') {
            this.props.history.push('/food')
            this.setState({ open: false });
        }
        //  else if (propertyName === 'Rolls') {
        //     this.props.history.push('/rolls')
        //     this.setState({ open: false });
        // } else if (propertyName === 'Drinks') {
        //     // this.props.history.push('/drinks')
        //     this.setState({ open: false });
        // } else if (propertyName === 'Appetizers') {
        // this.props.history.push('/appetizers')
        // this.setState({ open: false });
        // }
    }

    render() {
    return (
        <div className="home">
            {/* <img src={tacos} width="100%" height="150%" alt="tacosPic" /> */}

            {/* <p>
            Taco's Fresh Sport + Cantina first opened in 2017 and was sold to two brothers Khue Vang and Lue Vang in Octover of 2018. Both brothers have been in the restaurant industry over 20 years as sushi chefs. The Two brothers launch their first grand opening in December of 2018. The restaurant is a fusion of Asian and Mexican fod. They serve taco, sushi, and taco-sushi and ramen.
            </p> */}
            <div onClick={(event) => this.menu('Food', event)}>
                {/* <img src={taco2}  className="idk" /> */}
                {/* <img src={A1} width="90%" height="100vh" />
                <img src={A2} width="90%" height="100vh" />
                <img src={A3} width="90%" height="100vh" />
                <img src={A4} width="90%" height="100vh" /> */}
                {/* Tacos */}
            </div>
            {/* <div className="grid-item" onClick={(event) => this.menu('Rolls', event)}>
                <img src={T1} width="90%" height="100vh" /> */}
                {/* <img src={T2} width="90%" height="100vh" />
                <img src={T3} width="90%" height="100vh" />
                <img src={T4} width="90%" height="100vh" />
                <img src={T5} width="90%" height="100vh" /> */}
                {/* Rolls
            </div> */}
            {/* <div className="grid-item" onClick={(event) => this.menu('Appetizers', event)}>
                <img src={T1} width="90%" height="100vh" />
                Appetizers/Drinks
            </div> */}
            {/* <div className="grid-item" onClick={(event) => this.menu('Drinks', event)}>
                <img src={T1} width="90%" height="100vh" />
                Drinks
            </div> */}
        {/* </main> */}

        {/* <div className="contact">
            <p>Phone: <a href="tel:651 777 3966">(651)777-3966</a></p>
            <p>location: 3156 Century Avenue North, Mahtomedi, Minnesota 55110</p>
            <p>Hours: Sunday-Thursday 11AM-9PM ; Friday & Saturday 11AM-12AM</p>
            <p>Email: <a href="mailto:tacofreshfusion@yahoo.com" className="contact-link">tacofreshfusion@yahoo.com</a></p>
            <p>Follow us on <a href="https://www.facebook.com/tacosfreshasianfusionsportscantina/">Facebook</a></p>
        </div>  */}
        </div>

        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Home);