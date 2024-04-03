import React from 'react';
import './Scroll.css';

const Scroll = (components) => {
    return (
        <div className="scroll">
            {components.children}
        </div>
    );
};

export default Scroll;