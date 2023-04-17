import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	stops: [],
};

export const stopsSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setStopsSlise: (state, action) => {
			state.stops = cloneDeep(action.payload);
		},
	}
});

export default stopsSlice.reducer;

export const { setStopsSlise } = stopsSlice.actions;