import React from 'react';
import './style.css';

const Button = ({ name, id, onClick }) => {
    return (
        <div className="input-group-append">
            <button className="btn btn-info" onClick={onClick} type="button" id={id}>{name}</button>
        </div>
    );
}

export default Button;