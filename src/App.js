import React, {Component} from 'react';
import Robots from "./Components/Robots/Robots";
import SearchBox from "./Components/SearchBox/SearchBox";
import Logo from "./Components/Logo/Logo";
import {robotsStore} from "./Store/RobotsStore";
import "./Css/App.css"
import robotsRandomizer from "./Components/RobotsRandomizer/RobotsRandomizer";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robotsStore,
            searchfield: ""
        }
    }

    onSearchChange= (event) =>{
        this.setState({ searchfield: event.target.value })
    }

    onRandomized = (robotsStore) => {
        this.setState({ robots: robotsStore})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div>
                <button
                onClick={() => {
                    this.onRandomized(robotsRandomizer(10))
                    console.log(robotsRandomizer(10))
                }}
                >CLICK</button>
                <Logo/>
                <SearchBox searchChange={this.onSearchChange}/>
                <Robots robots={filteredRobots}/>
            </div>
        );
    }
};

export default App;