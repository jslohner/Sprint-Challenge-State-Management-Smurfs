import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../actions';

export const initialState = {
	isFetching: false,
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
				smurfData: action.payload
			};

		default:
			return state;
	};
};
