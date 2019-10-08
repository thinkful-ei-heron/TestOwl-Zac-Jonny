import React from 'react';
import './App.css';

function Card(props) {
    const header = props.header;
    const descption = props.desc;

    return (
        <div className="Card"> 
            <button type="button">delete</button> 
            <h3>{header}</h3> 
            <p>{descption}</p> 
        </div>
    )
};
export default Card;