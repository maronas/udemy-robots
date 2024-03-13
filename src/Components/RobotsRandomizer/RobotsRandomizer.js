import React from 'react';
import names from "../../ListMaker/Data/Firstnames.json";
import lastnames from "../../ListMaker/Data/Lastnames.json";
import {robotsStore} from "../../Store/RobotsStore";
const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};
const RobotsRandomizer = ({count}) => {
    for(let i = 0; i < count; i++){
        const number = randomNumberInRange(0, 1000)
        robotsStore[i] = ({
            id: i,
            name: names[number],
            username: names[number],
            email: lastnames[number] + number + "@ziza.cc"
        })
        console.log(names.count)
    }
    return (
        <div>

        </div>
    );
};

export default RobotsRandomizer;