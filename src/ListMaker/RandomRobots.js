import React from 'react';
import RobotCard from "../Components/RobotCard/RobotCard";
//
// const randomNumberInRange = (min, max) => {
//     return Math.floor(Math.random()
//         * (max - min + 1)) + min;
// };

const RandomRobots = ({robotsStore}) => {
    // for(let i = 0; i < count; i++){
    //     const number = randomNumberInRange(0, 1000)
    //     robotsStore[i] = ({
    //         id: i,
    //         name: names[number],
    //         username: names[number],
    //         email: lastnames[number] + number + "@ziza.cc"
    //     })
    //     console.log(names.count)
    // }

    console.log(robotsStore)
    return (
        <div className="page">
            {robotsStore.map(rbt =>
                <RobotCard
                    key={rbt.id}
                    id={rbt.id}
                    name={rbt.name}
                    email={rbt.email}
                />
            )}
        </div>
    );
};

export default RandomRobots;