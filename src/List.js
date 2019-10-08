import React, { Component } from 'react';

import './App.css';
import './List.css';

function List(props) {
    const name = props.name;
    const avatar = props.avatar;
    const alt = `The avatar of ${name}`
    const onStage = props.onStage;
    return (
        <li className="msg">
            <img className='chatAvatar' src={avatar} alt={alt} />
            <div><b>{name}</b>
            {onStage ? (<div className='staged'> on stage</div>) : (<div className='staged'> in session</div>)}
            </div>
        </li>
    );
}

export default List;
