import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	email: [],
    password:[]
};

export const registrationSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setRegistrationEmailSlise: (state, action) => {
			state.email = cloneDeep(action.payload);
		},
		setRegistrationPasswordSlise: (state, action) => {
			state.password = cloneDeep(action.payload);
		},

	}
});

export default registrationSlice.reducer;

export const { setRegistrationEmailSlise, setRegistrationPasswordSlise  } = registrationSlice.actions;