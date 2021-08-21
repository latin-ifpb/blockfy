import React from 'react';
import './style.css';

const Input = ({ name, id, value, onChange }) => {
    return (
        <input type="text" value={value} onChange={onChange} placeholder={name} className="form-control" id={id} />
    );
}

export default Input;