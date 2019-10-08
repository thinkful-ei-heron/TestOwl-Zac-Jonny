import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './card';
import store from './store';

let data = store.lists.map(item => {
	return{
	cards: item.cardIds.map(item => store.allCards[item])
}});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Card key={data[0].cards[0].id} header={data[0].cards[0].header} desc={data[0].cards[0].desc} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders the Card as expected', () => {
	const card = renderer
		.create(<Card key={data[0].cards[0].id} header={data[0].cards[0].header} desc={data[0].cards[0].desc} />)
		.toJSON();
	expect(card).toMatchSnapshot();
});