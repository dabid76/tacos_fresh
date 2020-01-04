import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Icon} from 'semantic-ui-react'
// import './Rolls.css'

class Rolls extends Component {

    render() {
        return (
            <div className="tacos">
                <div  className="picTacos">
                    <h2>
                        Rolls Menu
                    </h2>
                </div>
                <ul className="leaders">
                    <div className="T1">
                        <li>
                            <span>S1. California Roll</span>
                            <span>$7.95</span>
                        </li>
                        <span>
                            <p className="description">
                                Crab, Cucumber & Avocado
                            </p>
                        </span>
                    </div>

                    <div className="T2">
                        <li>
                            <span>S2. Crunchyroll</span>
                            <span>$7.95</span>
                        </li>
                        <span>
                            <p className="description">
                                Crab Mix, Cucumber, Tempura Flakes, Eel Sauce & Spicy Mayo
                            </p>
                        </span>
                    </div>

                    <div className="T1">
                        <li>
                            <span>S3. Philadelphia Roll</span>
                            <span>$13.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Salmon, Cream Cheese & Cucumber
                            </p>
                        </span>
                    </div>

                    <div className="T2">
                        <li>
                            <span>S4. Spicy Salmon Roll</span>
                            <span>$8.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Salmon, Cucumber, Garlic Powder & Chili Oil
                            </p>
                        </span>
                    </div>

                    <div className="T1">
                        <li>
                            <span>S5. Spicy Yellowtail Roll</span>
                            <span>$8.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Yellowtail, Scallion, Cucumber, Sriracha & Lime Seasoning
                            </p>
                        </span>
                    </div>

                    <div className="T2">
                        <li>
                            <span>S6. Spicy Tuna Roll</span>
                            <span>$8.50</span>
                        </li>
                        <span>
                            <p className="description">
                                Tuna, Spicy Mayo & Cucumber
                            </p>
                        </span>
                    </div>

                    <div className="T1">
                        <li>
                            <span>S7. Crunchy Tempura Roll</span>
                            <span>$13.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Tempura Shrimp, Avocado, Cucumber, Top With Tuna, Jalapeños, Flake, Pouza & Eel Sauce
                            </p>
                        </span>
                    </div>

                    <div className="T2">
                        <li>
                            <span>S8. #9 Roll</span> 
                            <span>$12.95</span>
                        </li>
                        <span>
                        <p className="description">
                            Tempura Shrimp, Avocado, Cucumber, Top With Salmon, Avocado, Eel & Spicy Sauce
                        </p>
                        </span>
                    </div>

                    <div className="T1">
                        <li>
                            <span>S9. Caterpillar Roll</span>
                            <span>$13.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Freshwater Eel, Cucumber, Top With Avocado & Eel Sauce
                        </p>
                        </span>
                    </div>

                    <div className="T2">
                        <li>
                            <span>S10. MA Roll</span>
                            <span>$13.50</span>
                        </li>
                        <span>
                        <p className="description">
                            Tempura Shrimp, Cucumber, Avocado, Top With Spicy Tuna, Jalapeños, Eel & Spicy Mayo Sauce
                        </p>
                        </span>
                    </div>

                    <div className="T1">
                        <li>
                            <span>S11. Mahtomedi Roll</span>
                            <span>$14.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Tuna, Salmon, Tilapia, Avocado, Cucumber, Top With Flake, Eel and Spicy Mayo Sauce
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

export default connect(mapStateToProps)(Rolls);