import React from 'react';
import RobotCard from "../Components/RobotCard/RobotCard";

const RobotsList = ({robots}) => {
    return (
        <div className="page">
            {robots.map(rbt =>
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

export default RobotsList;