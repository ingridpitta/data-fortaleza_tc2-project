import React from 'react';
import { Link } from 'react-router-dom'
import './card.styles.scss';

const Card = ({ id, classCard, image, chamada, title, text, description, destination, btnText }) => (
    <div className={classCard} id={`card${id}`}>
        <div className="imageCard">
            {image ? 
                <img src={image} alt={description}/>
                :
                null
            }
        </div>
        <h1><span>{chamada}</span> {title}</h1>
        <p>{text}</p>
        <div className="btnCard">
            <Link to={`/${destination}`}><button>{btnText}</button></Link>
        </div>
    </div>
)

export default Card