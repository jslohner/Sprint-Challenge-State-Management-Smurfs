import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../../store/actions';

import Smurf from './Smurf.js';
import SmurfForm from './SmurfForm.js';

function Smurfs({ isFetching, smurfData, fetchSmurfs }) {

	useEffect(() => {
		fetchSmurfs();
	}, []);

	return (
		<div className='smurfs'>
			<h2>Smurf it up</h2>
			{isFetching && <h2>Fetching Smurf Data...</h2>}
			{!isFetching && smurfData && (
				smurfData.map(smurf => {
					return <Smurf key={smurf.id} smurf={smurf}/>
				})
			)}
			<SmurfForm />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isFetching: state.smurfs.isFetching,
		smurfData: state.smurfs.smurfData
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
