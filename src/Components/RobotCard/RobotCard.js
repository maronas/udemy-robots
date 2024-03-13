import React from 'react';
import './RobotCard.css'

const RobotCard = ({name, email}) => {


    return (
        <div className='card'>
            <img
                alt="robotsStore"
                src={`https://robohash.org/${name}?100x100`}
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default RobotCard;