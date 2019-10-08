import React from 'react';

import './App.css';
import store from './store.js';
import './List.css';


function Chat(props) {
    const id = props.id;
    const participate = store.participants.find(person => person.id === id);
    const avatar = participate.avatar;
    const name = participate.name;
    const alt = `The avatar of ${name}`
    const type = props.type;

    if (props.message) {
        const message = props.message;
        // const time = new Date(props.time).toTimeString();
        let stamp = `${new Date(props.time).getHours()}:${new Date(props.time).getMinutes()}`;

        return (
            <li className='msg'>
                <img src={avatar} alt={alt} /> <b>{name}</b> <span className='emote'>{stamp}</span>
                <div>{message}
                </div>
            </li>
        );
    } else {
        switch (type) {
            case 'clap':
                return (<li className='emote'><b>{name}</b> clapped</li>);
            case 'join':
                return (<li className='emote'><b>{name}</b> joined</li>);
            case 'thumbs-down':
                return (<li className='emote'><b>{name}</b> gave a thumbs down</li>);
            case 'thumbs-up':
                return (<li className='emote'><b>{name}</b> gave a thumbs up</li>);
            case 'raise-hand':
                return (<li className='emote'><b>{name}</b> raised their hand</li>);
            case 'join-stage':
                return (<li className='emote'><b>{name}</b> joined the stage</li>);
            case 'leave-stage':
                return (<li className='emote'><b>{name}</b> left the stage</li>);
            case 'leave':
                return (<li className='emote'><b>{name}</b> left</li>);
            default:
                throw new Error();
        }
    }
}

export default Chat;
