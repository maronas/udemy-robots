import React from 'react';
import './Robots.css'
import RandomRobots from "../../ListMaker/RandomRobots";

const Robots = () => {
    return (
        <div>
            <RandomRobots count={11}/>
        </div>
    );
};

export default Robots;