import React from 'react';
import './style.css';

const Display = ({ id, title, counter }) => {
    return (
        <div id="display">
            <div><p id="titleStats"> {title} </p></div> <br />
            <div id='circle'>
                <p className='counter' id={id}>{counter}</p>
                <p>vezes</p>
            </div>
        </div>
    );
}

export default Display;