import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Icon} from 'semantic-ui-react'
import './Food.css'
// import A1 from '../images/A1.jpg'


class Food extends Component {

    componentDidMount(id) {
        this.props.dispatch({type: 'GET_TACOS'})
        this.props.dispatch({type: 'GET_SUSHI_TACOS'})
        this.props.dispatch({type: 'GET_SUSHI_MAKI_ROLL'})
        this.props.dispatch({type: 'GET_SPECIALTY_ROLL'})
        this.props.dispatch({type: 'GET_APPETIZERS'})
    } // end componentDidMount

    render() {
        return (
            <>
            <div className="tacos">
                <div className="picTacos">
                    <div className="taco-grid-container">
                    <main className="flexbox">
                    <div className="grid-item">
                        Main Menu                    
                    </div>
                    </main>
                    </div>
                </div>
                <ul className="leaders">
                <div className="T1">
                <h3>Tacos</h3>
                {this.props.reduxStore.dine.tacos.map((item) =>(
                <>
                <li>
                    <span> {item.dine}</span>
                    <span> {item.money}</span>
                </li>
                    <span>
                        <p className="description">
                            {item.description}
                        </p>
                    </span>
                </>
                ))}
                <h3>Sushi Tacos</h3>
                {this.props.reduxStore.dine.sushiTaco.map((item) =>(
                <>
                <li>
                    <span> {item.dine}</span>
                    <span> {item.money}</span>
                </li>
                    <span>
                        <p className="description">
                            {item.description}
                        </p>
                    </span>
                </>
                ))}
                <h3>Sushi (Maki Roll)</h3>
                {this.props.reduxStore.dine.sushiMakiRoll.map((item) =>(
                <>
                <li>
                    <span> {item.dine}</span>
                    <span> {item.money}</span>
                </li>
                    <span>
                        <p className="description">
                            {item.description}
                        </p>
                    </span>
                </>
                ))}
                <h3>Specialty Roll</h3>
                {this.props.reduxStore.dine.specialtyRoll.map((item) =>(
                <>
                <li>
                    <span> {item.dine}</span>
                    <span> {item.money}</span>
                </li>
                    <span>
                        <p className="description">
                            {item.description}
                        </p>
                    </span>
                </>
                ))}
                <h3>Appetizers</h3>
                {this.props.reduxStore.dine.appetizers.map((item) =>(
                <>
                <li>
                    <span> {item.dine}</span>
                    <span> {item.money}</span>
                </li>
                    <span>
                        <p className="description">
                            {item.description}
                        </p>
                    </span>
                </>
                ))}
                </div>
                </ul>
            </div>

            </>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {reduxStore}; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Food);