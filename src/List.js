import React, { Component } from 'react';

import './App.css';
import './List.css';

function List(props) {
    const name = props.name;
    const avatar = props.avatar;
    const alt = `The avatar of ${name}`
    const onStage = props.onStage;
    return (
        <li className="List">
            <img src={avatar} alt={alt} />{name}
            {onStage ? (<div> on stage</div>) : (<div> in session</div>)}
        </li>
    );
}

export default List;
