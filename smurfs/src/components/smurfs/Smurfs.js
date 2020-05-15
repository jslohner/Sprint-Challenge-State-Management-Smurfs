import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../../store/actions';

function Smurfs({ isFetching, smurfData, fetchSmurfs }) {

	useEffect(() => {
		fetchSmurfs();
	}, []);

	return (
		<div>
			<h2>Smurf it up</h2>
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
