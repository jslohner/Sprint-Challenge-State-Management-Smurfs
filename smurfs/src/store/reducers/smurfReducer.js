import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, POST_SMURF_START, POST_SMURF_SUCCESS, PUT_SMURF_START, PUT_SMURF_SUCCESS } from '../actions';

export const initialState = {
	isFetching: false,
	isPosting: false,
	isEditing: false,
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
				smurfData: action.payload
			};
		case PUT_SMURF_START:
			return {
				...state,
				isEditing: true
			};
		case PUT_SMURF_SUCCESS:
			return {
				...state,
				isEditing: false,
				smurfData: action.payload
			};

		default:
			return state;
	};
};
