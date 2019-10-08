import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Stage from './stage';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Stage />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders the List as expected', () => {
	const stage = renderer
		.create(<Stage />)
		.toJSON();
	expect(stage).toMatchSnapshot();
});