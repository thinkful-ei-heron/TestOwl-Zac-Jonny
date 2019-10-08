import React from 'react';

import './App.css';
import List from "./List";
import Chat from "./Chat";
import store from "./store";

function App() {
  const toggleChat = false;
  return (
    <div className="App">
        <header class="App-header">
            <h1>Trelloyes!</h1>
        </header>
        {(toggleChat)
            ? (<div class="App-list">
                {store.participants.map(item => (item.inSession) ? (
                    <List key={item.id} name={item.name} avatar={item.avatar} onStage={item.onStage}/>) : '')}
            </div>)
            : (<div class="App-list">
                {store.chatEvents.map(item => (item.message)
                    ? (<Chat key={item.timestamp} id={item.participantId} type={item.type} message={item.message}
                             time={item.time}/>)
                    : <Chat key={item.timestamp} id={item.participantId} type={item.type}/>)}
            </div>)}
    </div>
  );
}

export default App;
