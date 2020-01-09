import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Icon} from 'semantic-ui-react'
// import drink2 from '../images/drink2.jpg'
import './Happy.css'



class Happy extends Component {

    render() {
        return (
            <div className="happy">
                <div  className="picTacos">
                    <div className="happy-grid-container">
                    <main className="flexbox">
                    <div className="grid-item">
                        {/* <img src={drink2} alt='one' height="136px" width="300px" /> */}
                        <h1>Happy Hour</h1>
                    </div>
                    </main>
                    </div>
                    </div>
                    {/* <h1>Happy Hour</h1> */}
                    <br/>

                    <ul className="leaders">
                    <div className="happyList">
                    <h2 className="hour">Daily Happy Hours Specials!</h2>
                    <h2 className="hour">3:00 PM - 6:00 PM</h2>
                    {/* <ul className="leaders"> */}
                    {/* <div className="happyList"> */}
                        <h3>$2.50 Tacos (exclude sushi tacos)</h3>
                        <h3>$3 Beers</h3>
                        
                        <li>
                            <span>Blue Moon Bottle</span>
                        </li>
                        <li>
                            <span>Heineken Bottle</span>
                        </li>
                        <li>
                            <span>Corona Bottle</span>
                        </li>                        
                        <li>
                            <span>Angry Orchard (16oz. tap)</span>
                        </li>
                        <li>
                            <span>Modelo (16oz. tap)</span>
                        </li>

                        <h3>$4 Wine (per glass)</h3>
                        <h3>$5 House Margarita (13oz)</h3>
                        <h3>$5 Sushi Maki Rolls</h3>
{/* <br/> */}
                        <div className="daily">
{/* <br/> */}
                        <h2>Daily Specials</h2>
                        <h3>Monday</h3>
                        <h4>50% OFF Sushi Maki Roll</h4>

                        <h3>Tuesday</h3>
                        <h4>$1.99 Traditional Taco(1)</h4>

                        <h3>Wednesday</h3>
                        <h4>$9 Specialty Rolls</h4>

                        <h3>Thursday</h3>
                        <h4>Thirsty Thursday, $5 Beers, (25oz. tap)</h4>

                        <h3>Friday</h3>
                        <h4>Buy 1 Get 1 Half OFF Bar Drinks (exclude tap)</h4>
                        </div>
                        
                        <h2>Specials</h2>

                        <h3>
                            <span>$5 Pho</span>
                        </h3>
                        <span>
                            <p className="description">
                                [Noodle Soup: Beef, beef meatball, green onion, cilantro, onion, bean sprouts, jalapeno & basil]
                            </p>
                        </span>
                        <span>Only Available 11AM-9PM</span>

                        <h3>
                            <span>$8 Papaya</span>
                        </h3>
                        <span>Only Available Fri & Sat: 7PM - Closed</span>
                       
                        <h3>
                            <span>$10 Laab Namtok</span>
                        </h3>
                    </div>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {reduxStore}; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Happy);