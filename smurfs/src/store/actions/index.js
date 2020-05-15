import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const fetchSmurfs = () => {
	return dispatch => {
		dispatch({ type: FETCH_SMURFS_START });

		axios.get('http://localhost:3333/smurfs')
			.then(res => {
				dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const postSmurf = smurf => {
	return dispatch => {
		dispatch({ type: POST_SMURF_START });

		axios.post('http://localhost:3333/smurfs', smurf)
			.then(res => {
				dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
			})
			.catch(err => {
				console.log(err);
			})
	};
};

export const PUT_SMURF_START = 'PUT_SMURF_START';
export const PUT_SMURF_SUCCESS = 'PUT_SMURF_SUCCESS';
export const putSmurf = smurf => {
	return dispatch => {
		dispatch({ type: PUT_SMURF_START });

		axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
			.then(res => {
				console.log(res);
				dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data })
			})
			.catch(err => {
				console.log(err);
			})
	};
};
