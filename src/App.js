import React, {Component} from 'react';
import Robots from "./Components/Robots/Robots";
import SearchBox from "./Components/SearchBox/SearchBox";
import Logo from "./Components/Logo/Logo";
import {robotsStore} from "./Store/RobotsStore";
import "./Css/App.css"
import robotsRandomizer from "./Components/RobotsRandomizer/RobotsRandomizer";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundry from "./Components/ErrorBoundry";

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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div>
                <div className="menubar__">
                    <div>
                        <Logo/>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <button
                        onClick={() => {
                            this.onRandomized(robotsRandomizer({count: 10}))
                        }}
                    >Randomize</button>
                </div>
                <Scroll>
                    <ErrorBoundry>
                        <Robots robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
};

export default App;