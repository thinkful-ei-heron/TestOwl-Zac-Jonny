import React from 'react';

import './App.css';
import List from "./List";

function App(props) {
  const store = props.store;

  return (
    <div className="App">
        <header class="App-header">
            <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">
            {store.lists.map(item => (<List key={item.id} header={item.header} cards={item.cardIds.map(item => store.allCards[item])}/>))}
        </div>
    </div>
  );
}

export default App;
