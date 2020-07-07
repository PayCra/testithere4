import React, {Component} from 'react';
import './App.css';
import Gusu from "./Gusu";

class FavoriteCultivators extends Component {

    state = {
        displayedString: "I adore Nie Huaisang."
    }

    getHandleClick = (cultivator) => {
        return (() => {
            this.setState({displayedString: ["I adore ",cultivator,"."]})
        })
    }

    render() {
        return (
            <div>
                <div className="menu">
                <a onClick={this.getHandleClick('Nie Huaisang')}>Quinghe</a>
                <a onClick={this.getHandleClick('Jin Guangyao')}>Lanling</a>
                <a onClick={this.getHandleClick(<Gusu key={'Lan Xichen'}/>)}>Gusu</a>
                </div>
                <div className="main">{this.state.displayedString}</div>
            </div>
        )
    }
}

export default FavoriteCultivators;
