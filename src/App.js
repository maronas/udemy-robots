import React, {Component} from 'react';
import Robots from "./Components/Robots/Robots";
import SearchBox from "./Components/SearchBox/SearchBox";
import Logo from "./Components/Logo/Logo";
import {robotsStore} from "./Store/RobotsStore";
import names from "./ListMaker/Data/Firstnames.json";
import lastnames from "./ListMaker/Data/Lastnames.json";
import RobotsRandomizer from "./Components/RobotsRandomizer/RobotsRandomizer";

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
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div>
                <Logo/>
                <SearchBox searchChange={this.onSearchChange}/>
                <Robots robots={filteredRobots}/>
            </div>
        );
    }
};

export default App;