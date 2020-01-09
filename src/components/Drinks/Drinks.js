import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Icon} from 'semantic-ui-react'
// import drink3 from '../images/drink3.jpg'
import './Drinks.css'



class Drinks extends Component {

    render() {
        return (
            <div className="drinks">
                <div  className="picTacos">
                    <div className="drink-grid-container">
                    <main className="flexbox">
                    <div className="grid-item">
                        {/* <img src={drink3} alt='one' height="136px" width="300px" /> */}
                        <h1>Drinks</h1>
                    </div>
                    </main>
                    </div>
                    </div>
                    {/* <h1>Drinks Menu</h1> */}
                    <ul className="leaders">
                    <div className="drinkList">
                        <h2>Drinks</h2>
                        <h3>Margaritas/Cocktails</h3>
                        <h4>$7.00 (13oz.), $9.00 (16oz.), $12.00 (24oz.)</h4>
                        
                        <li>
                            <span>House Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Tequila, Lime, Simple Syrup, Triple Sec, Swet & Sour
                            </p>
                        </span>

                        <li>
                            <span>Triple Smooth Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Jameson Whiskey, Grand Marnier, Lime, Pineapple Juice & Ginger Ale
                            </p>
                        </span>

                        <li>
                            <span>Fiesta Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Reposado Tequila, Grapefruit, Lime, Simple Syrup & Triple Sec
                            </p>
                        </span>

                        <h5>$8.00 (13oz.), $10.00 (16oz.), $13.00 (24oz.)</h5>
                        
                        <li>
                            <span>Extreme Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Patron Tequila, Grand Marnier, Lime, Simple Syrup & Triple Sec
                            </p>
                        </span>

                        <h4>$9.00 (16oz.), $12.00 (24oz.)</h4>

                        <li>
                            <span>Green Lady Cocktail</span>
                        </li>
                        <span>
                            <p className="description">
                                Captain Morgan, Malibu Rum, Blue Curacao, Triple Sec & Simple Syrup
                            </p>
                        </span>

                        <li>
                            <span>Sex on the Beach Cocktail</span>
                        </li>
                        <span>
                            <p className="description">
                                Vodka, Rum, Peach Schnapps, Orange, Pineapple, Half & Half, & Cranberry
                            </p>
                        </span>

                        <li>
                            <span>Sex with the Captain Cocktail</span>
                        </li>
                        <span>
                            <p className="description">
                                Captain Morganm Amaretto , Peach Schnapps, Cranberry & Orange
                            </p>
                        </span>

                        <h3>$6 Wine(per glass)</h3>

                        <li className="wine">
                            Cabernet
                        </li>
                        <li className="wine">
                            Merlot
                        </li>
                        <li className="wine">
                            Pinot Grigio
                        </li>
                        <li className="wine">
                            Moscoto
                        </li>
                        <li className="wine">
                            White Zinfandel
                        </li>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        <li>
                            <span>Stella Rose Black</span>
                        </li>
                        <span>
                            <p className="description">
                                Seductive Semi-Sweet & rich grape wine specialty with natural flavors of ripe blackberry, blueberry & raspberry
                            </p>
                        </span>

                        <li>
                            <span>Stella Rose Pink</span>
                        </li>
                        <span>
                            <p className="description">
                                Semi-Sweet sparking with vibrant pink hue that give off delicate fresh crisp peach honey & red berry qualities
                            </p>
                        </span>

                        <li>
                            <span>Stella Rose Red</span>
                        </li>
                        <span>
                            <p className="description">
                                Semi-Sweet semi sparkling crisp flavor that give off delicate fresh strawberry & red berry qualities
                            </p>
                        </span>

                        <h2>ON TAP</h2>
                        <h4>$5.50 (16oz.), $9.00 (25oz.)</h4>

                        <li>
                            <span>Surley - Furious</span>
                        </li>
                        <span>
                            <p className="description">
                                A blend of American hopes and Scottish malt; this delievers waves of citrus,
                                pine & caramel-toffee. 6.6% ABV 99 IBU
                            </p>
                        </span>

                        <li>
                            <span>Sam Adams - New England IPA</span>
                        </li>
                        <span>
                            <p className="description">
                                A slight sweetness perfectly balanced by the pineapple & grapefruit hop character
                                without beign overly bitter. 6.8% ABV 35 IBU
                            </p>
                        </span>

                        <li>
                            <span>Deshutes - Fresh Squeezed IPA</span>
                        </li>
                        <span>
                            <p className="description">
                                Classic Begian larger with a floral, hop aroma, well-balanced fruity malty sweetness,
                                crisp hop bitterness & a soft dry finish. 6.4% ABV 60 IBU
                            </p>
                        </span>

                        <h4>$4.50 (16oz.), $8.00 (25oz.)</h4>

                        <li>
                            <span>Stella Artois</span>
                        </li>
                        <li>
                            <span>Blue Moon</span>
                        </li>
                        <li>
                            <span>Coors Light Blue Moon</span>
                        </li>
                        <li>
                            <span>Dos Equis Lager Especial</span>
                        </li>
                        <li>
                            <span>Modelo</span>
                        </li>
                        <li>
                            <span>Sapporo</span>
                        </li>
                        <li>
                            <span>Angry Cider</span>
                        </li>

                        <h2>$4 Bottle</h2>
                        <li className="wine">
                            Corona Extra
                        </li>
                        <li className="wine">
                            Heineken
                        </li>
                        <li className="wine">
                            Blue Moon
                        </li>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {reduxStore}; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Drinks);