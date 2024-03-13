import React from 'react';
import './Robots.css'
import RandomRobots from "../../ListMaker/RandomRobots";

const Robots = ({robots}) => {
    return (
        <div>
            <RandomRobots robotsStore={robots}/>
        </div>
    );
};

export default Robots;