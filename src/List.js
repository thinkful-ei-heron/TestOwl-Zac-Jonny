import React from 'react';
import Card from './Card.js';

import './App.css';

function List(props) {
    const header = props.header;
    const cards = props.cards;
    return (
        <section className="List">
            <header className="List-header">
                <h2>{header}</h2>
            </header>
            <div className="List-cards">
                {cards.map(card => (<Card key={card.id} header={card.title} desc={card.content}/>))}
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}

export default List;
