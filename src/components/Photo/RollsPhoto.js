import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';


import T1 from '../images/T1.jpg'
import T2 from '../images/T2.jpg'
import T3 from '../images/T3.jpg'
import T4 from '../images/T4.jpg'
import T5 from '../images/T5.jpg'

class RollsPhoto extends Component {

    state = { 
        isOpen: false 
    }

    handleShowDialog = () => {
        console.log('clicked');
      this.setState({ isOpen: !this.state.isOpen });
    //   swal({
    //     title: 'Title',
    //     text: '<img width="250" height="200" src="T1">',
    //     html: true
    //     });
    }

    render() {
    return (
        <div className="photo">
            <h1>
                Rolls Gallery
            </h1>
            <Carousel className="carousel" >
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T1}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T2}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T3}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T4}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T5}
                            />
                    </Carousel.Item>
                </Carousel>
<img
className="small"
src={T1}
onClick={this.handleShowDialog}
alt="no image"
/>
{this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
            // onClick = {this.handleShowDialog}
          >
            <img
              className="image"
              src={T1}
              onClick = {this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
        </div> 
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(RollsPhoto);