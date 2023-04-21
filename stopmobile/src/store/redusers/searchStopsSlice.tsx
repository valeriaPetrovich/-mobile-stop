import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	stops: [],
};

export const searchStopsSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setSearchStopsSlise: (state, action) => {
			state.stops = cloneDeep(action.payload);
		},
	}
});

export default searchStopsSlice.reducer;

export const { setSearchStopsSlise } = searchStopsSlice.actions;