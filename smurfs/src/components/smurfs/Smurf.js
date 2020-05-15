import React from 'react';
import { connect } from 'react-redux';

function Smurf({ smurf }) {
	return (
		<div className='smurf'>
			<h3>Name - {smurf.name}</h3>
			<p>ID - {smurf.id}</p>
			<p>Age - {smurf.age}</p>
			<p>Height - {smurf.height}cm</p>
		</div>
	);
}

export default connect()(Smurf);
