import React from 'react';
import './stage.css';

function Tile(props) {

	const alt = `The avatar of ${props.name}`
	return (
		<div className='Tile'>
			<h2>{props.name}</h2>
			<img src={props.avatar} alt={alt}/>
		</div>
	);
}

function Stage(props) {
	const arr = props.store.map(item => {
			if (item.onStage) return <Tile key={item.id} name={item.name} avatar={item.avatar} />;
		})

	return (
		<section className='Stage'>
			{arr}
		</section>
	);
}

export default Stage;