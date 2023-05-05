import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	value: [],
};

export const loginCheckSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setloginCheckSlise: (state, action) => {
			state.value = cloneDeep(action.payload);
		},
	}
});

export default loginCheckSlice.reducer;

export const { setloginCheckSlise } = loginCheckSlice.actions;