import React from 'react';
import { connect } from 'react-redux';

function Smurf({ smurf }) {
	return (
		<div className='smurf'>
			<h3>Name - {smurf.name}</h3>
			<p>Age - {smurf.age}</p>
			<p>Height - {smurf.height}</p>
		</div>
	);
}

export default connect()(Smurf);
