import React, {Component} from 'react';
import './App.css';
import Garden from "./Garden";

class App extends Component {

    state = {
        displayedString: "This is a house."
    }

    getHandleClick = (room) => {
        return (() => {
            this.setState({displayedString: ["This is the " , room , "."]})
        })
    }

    render() {
        return (
            <div>
                <div className="menu">
                <a onClick={this.getHandleClick('kitchen')}>Kitchen</a>
                <a onClick={this.getHandleClick('bedroom')}>Bedroom</a>
                <a onClick={this.getHandleClick(<Garden key={'garden'}/>)}>Garden</a>
                </div>
                <div className="main">{this.state.displayedString}</div>
            </div>
        )
    }
}

export default App;
