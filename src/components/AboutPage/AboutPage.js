import React, { Component } from 'react';
import './AboutPage.css'
import {connect} from 'react-redux';
import tacos from '../AboutPage/tacos.jpg'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AboutPage extends Component {

  render() {
  return (
      <div className="about">
        <img src={tacos} className="no" />
      <div className="story">
        <p>
          Taco's Fresh Sport + Cantina first opened in 2017 and was sold to 
          two brothers Khue Vang and Lue Vang on October of 2018. 
          Both brothers have been in the restaurant industry over 20 years as sushi chefs. 
          The Two brothers launch their first grand opening in December of 2018. 
          The restaurant is a fusion of Asian and Mexican food. 
          They serve taco, sushi, and taco-sushi.
        </p>
      </div>
        <img src={tacos} className="yeah" />
      </div>

    );
  }
}


const mapStateToProps = reduxStore => {
  return {
      reduxStore
  }; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(AboutPage);