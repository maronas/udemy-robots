import React from 'react';
import './Robots.css'
import RobotsList from "../../ListMaker/RobotsList";

const Robots = ({robots}) => {
    return (
        <div>
            <RobotsList robots={robots}/>
        </div>
    );
};

export default Robots;