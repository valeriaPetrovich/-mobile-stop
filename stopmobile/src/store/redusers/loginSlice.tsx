import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	email: [],
    password:[],
};

export const loginSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setEmailSlise: (state, action) => {
			state.email = cloneDeep(action.payload);
		},
		setPasswordSlise: (state, action) => {
			state.password = cloneDeep(action.payload);
		},

	}
});

export default loginSlice.reducer;

export const { setEmailSlise, setPasswordSlise  } = loginSlice.actions;