import React from 'react';
import Input from '../TextField';
import Button from '../Button';
import './style.css';

const Form = ({ nameTxt, idTxt, nameBtn, idBtn, onClick, value, onChange }) => {
    return (
        <>
            <div className="input-group mb-3">
                <Input name={nameTxt} id={idTxt} value={value} onChange={onChange} />
                <Button name={nameBtn} id={idBtn} onClick={onClick} />
            </div>
        </>
    );
}

export default Form;