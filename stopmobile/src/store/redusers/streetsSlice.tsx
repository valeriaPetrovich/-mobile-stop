import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	value: [],
};

export const streetsSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setStreetsSlise: (state, action) => {
			state.value = cloneDeep(action.payload);
		},
	}
});

export default streetsSlice.reducer;

export const { setStreetsSlise } = streetsSlice.actions;