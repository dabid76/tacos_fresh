import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Photo.css'
import Grid from "@material-ui/core/Grid";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


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