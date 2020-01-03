import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Photo.css'
import Grid from "@material-ui/core/Grid";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


// import Tacos from './TacosPhoto'
// import Rolls from './RollsPhoto'

// import A0 from '../images/A0.jpg'
// import A1 from '../images/A1.jpg'
// import A2 from '../images/A2.jpg'
// import A3 from '../images/A3.jpg'
// import A4 from '../images/A4.jpg'

// import A5 from '../images/A5.jpg'
// import A6 from '../images/A6.jpg'
// import A7 from '../images/A7.jpg'
// import A8 from '../images/A8.jpg'
// import A9 from '../images/A9.jpg'
// import A10 from '../images/A10.jpg'
// import A11 from '../images/A11.jpg'


// import T1 from '../images/T1.jpg'
// import T2 from '../images/T2.jpg'
// import T3 from '../images/T3.jpg'
// import T4 from '../images/T4.jpg'
// import T5 from '../images/T5.jpg'

// let nextQ;


class Photo extends Component {

  state = { 
    photoIndex: 0,
    isOpen: false 
  }

  componentDidMount(id) {
    this.props.dispatch({type: 'GET_PIC'})
  } // end componentDidMount
    
  handleShowDialog(id) {
    console.log('clicked', id);
    this.setState({
        isOpen: !this.state.isOpen
      });
  }


    render() {
      const { photoIndex, isOpen } = this.state;
        
      let pic = this.props.reduxStore.pictures.map((pictures, id) => {
        return (
                
          <div className="name" key={id} >
                  <img 
                    className="image"
                    src={pictures.image} 
                    alt={pictures.id} 
                    onClick={() => this.handleShowDialog(pictures.id)}/>
          </div>)
      }) // end map

    return (
        <div className="name">
          <h2>
            Photo gallery
            <Grid container spacing={16}>
                {pic}
            </Grid>
          </h2>

        {isOpen && (
          
          <Lightbox
            mainSrc={this.props.reduxStore.pictures[photoIndex].image}
            nextSrc={this.props.reduxStore.pictures[(photoIndex + 1) % this.props.reduxStore.pictures.length].image}
            prevSrc={this.props.reduxStore.pictures[(photoIndex + this.props.reduxStore.pictures.length - 1) % this.props.reduxStore.pictures.length].image}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.props.reduxStore.pictures.length - 1) % this.props.reduxStore.pictures.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.reduxStore.pictures.length,
              })
            }
          />
          )}
        </div> 
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore,
        // pictures: reduxStore.picReducer,
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Photo);