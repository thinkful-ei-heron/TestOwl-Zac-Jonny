import React from 'react';

import './App.css';

function List(props) {
    const name = props.name;
    const avatar = props.avatar;
    const onStage = props.onStage;
    return (
        <li className="List">
            <img src={avatar} height='100px'/>{name}
            {onStage ? (<div> on stage</div>) : (<div> in session</div>)}
        </li>
    );
}

export default List;
