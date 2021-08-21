import React from 'react';
import './style.css';

const Card = ({ image, instruction }) => {
    return (
        <div class="card">
            <div class="card-body">
                <p class="card-text">{instruction}</p>
            </div>
            <img class="card-img-top" src={image} alt="Imagem de capa do card" />
        </div>
    );
}

export default Card;