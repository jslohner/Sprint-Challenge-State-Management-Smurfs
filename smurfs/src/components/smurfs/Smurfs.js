import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../../store/actions';

import Smurf from './Smurf.js';
import NewSmurfForm from './NewSmurfForm.js';
import EditSmurfForm from './EditSmurfForm.js';

function Smurfs({ isFetching, isPosting, smurfData, fetchSmurfs }) {

	useEffect(() => {
		fetchSmurfs();
	}, []);

	return (
		<div className='smurfs'>
			<h2>Smurf it up</h2>
			{isFetching && <h2>Fetching Smurf Data...</h2>}
			{isPosting && <h2>Posting New Smurf...</h2>}
			{!isFetching && !isPosting && smurfData && (
				smurfData.map(smurf => {
					return <Smurf key={smurf.id} smurf={smurf}/>
				})
			)}
			<NewSmurfForm />
			<EditSmurfForm />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isFetching: state.smurfs.isFetching,
		isPosting: state.smurfs.isPosting,
		smurfData: state.smurfs.smurfData
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
