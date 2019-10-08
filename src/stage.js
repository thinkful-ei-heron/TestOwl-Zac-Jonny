import React from 'react';
import participants from './store';
import './stage.css';

function Tile(props) {

	const alt = `The avatar of ${props.name}`
	return (
		<div className='tile'>
			<h2>{props.name}</h2>
			<img src={props.avatar} alt={alt}/>
		</div>
	);
}

function Stage() {
	const arr = participants.participants.map(item => {
			if (item.onStage) return <Tile key={item.id} name={item.name} avatar={item.avatar} />;
		})

	return (
		<section className='stage'>
			{arr}
		</section>
	);
}

export default Stage;