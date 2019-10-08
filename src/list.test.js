import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';
import store from './store';

let data = store.participants.map(item => {
	return {name: item.name, avatar: item.avatar, onStage: item.onStage}
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render((<List key={data[0].id} name={data[0].name} avatar={data[0].avatar} onStage={data[0].onStage}/>), div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders the List as expected', () => {
	const list = renderer
		.create(<List key={data[0].id} name={data[0].name} avatar={data[0].avatar} onStage={data[0].onStage}/>)
		.toJSON();
	expect(list).toMatchSnapshot();
});