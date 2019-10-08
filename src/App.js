import React, {useState} from 'react';
import './App.css';
import List from "./List";
import Chat from "./Chat";
import store from "./store";
import Stage from './stage';

function App() {
    const [showList, setList] = useState(false);
    const showChat = () => setList(false);
    const showParticipates = () => setList(true);

    return (
        <>
        <div className="App">
            <div>
                <div className='Tab-buttons'>
                    <button className={showList ? '' : 'active'} onClick={showChat}>Chat</button>
                    <button className={showList ? 'active' : ''} onClick={showParticipates}>Participates</button>
                </div>
                {(showList)
                    ? (<ul className="App-list">
                        {store.participants.map(item => (item.inSession) ? (
                            <List key={item.id} name={item.name} avatar={item.avatar}
                                  onStage={item.onStage}/>) : '')}
                    </ul>)
                    : (<div className="App-list">
                        {store.chatEvents.map((item, index) => (item.message)
                            ? (<Chat key={index} id={item.participantId} type={item.type} message={item.message}
                                     time={item.time}/>)
                            : <Chat key={index} id={item.participantId} type={item.type}/>)}
                    </div>)}
            </div>
            <Stage key='1' store={store.participants}/>
        </div>
        <div className='Footer'>
            <div className='Emotes'>
                <button> {'<'} </button>
                <button>Up</button>
                <button>Down</button>
                <button>Raise Hand</button>
                <button>Clap</button>
            </div>
        </div>
        </>
    );
}

export default App;
