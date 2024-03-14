import React from 'react';
import names from "../../ListMaker/Data/Firstnames.json";
import lastnames from "../../ListMaker/Data/Lastnames.json";
const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};
const RobotsRandomizer = ({count}) => {
    const robots = [{
            id: 0,
            name: '',
            username: '',
            email: ''
        },
    ]
    for(let i = 0; i < count; i++){
        const number = randomNumberInRange(0, 1000)
        robots[i] = ({
            id: i,
            name: names[number],
            username: names[number],
            email: lastnames[number] + number + "@ziza.cc"
        })
    }
    return (
        robots
    );
};

export default RobotsRandomizer;