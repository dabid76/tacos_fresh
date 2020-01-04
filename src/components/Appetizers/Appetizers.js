import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Icon} from 'semantic-ui-react'

class Appetizers extends Component {

    render() {
        return (
            <div className="tacos">
                <div  className="picTacos">
                    <h2>
                        Appetizers & Drinks
                        <h2>
                            Menu
                        </h2>
                    </h2>
                </div>
                <ul className="leaders">
                    <div className="T1">
                        <li>
                            <span>A1. Rosemary Parmesan Fries</span>
                            <span>$3.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Serverd With House Basil Garlic Aioli
                            </p>
                        </span>
                    </div>

                    <div className="T2">
                        <li>
                            <span>A2. KBBQ Wings (6)</span>
                            <span>$5.99</span>
                        </li>
                        <span>
                            <p className="description">
                                House Make korean BBQ sauce, & Top with Cilantro
                            </p>
                        </span>
                    </div>

                    <div className="T1">
                        <li>
                            <span>A3. Pot Sticker (5)</span>
                            <span>$4.99</span>
                        </li>
                        <span>
                            <p className="description">
                                Seasoned Ground Pork, Mix Vegetable, Serve With Sweet Soy
                            </p>
                        </span>
                    </div>

                    <div className="T2">
                        <li>
                            <span>A4. Crispy Chicken Feet</span>
                            <span>$4.99</span>
                        </li>
                        <span>
                            <p className="description">
                                Served With House Chipotle Sauce
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {reduxStore}; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Appetizers);