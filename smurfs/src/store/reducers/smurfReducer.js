import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, POST_SMURF_START, POST_SMURF_SUCCESS } from '../actions';

export const initialState = {
	isFetching: false,
	isPosting: false,
	smurfData: null
};

export const smurfReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				isFetching: false,
				smurfData: action.payload
			};
		case POST_SMURF_START:
			return {
				...state,
				isPosting: true
			};
		case POST_SMURF_SUCCESS:
			return {
				...state,
				isPosting: false,
				smurfData: [...state.smurfData, action.payload]
			};

		default:
			return state;
	};
};
