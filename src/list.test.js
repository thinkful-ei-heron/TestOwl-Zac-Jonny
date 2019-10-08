import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';
import store from './store';

let data = store.lists.map(item => {
	return{
	id: item.id,
	header: item.header,
	cards: item.cardIds.map(item => store.allCards[item])
}});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<List key={data[0].id} header={data[0].header} cards={data[0].cards} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders the List as expected', () => {
	const list = renderer
		.create(<List key={data[0].id} header={data[0].header} cards={data[0].cards} />)
		.toJSON();
	expect(list).toMatchSnapshot();
});