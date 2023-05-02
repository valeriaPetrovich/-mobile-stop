import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	email: [],
    password:[],
	name:[],
	country:[],
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
		setRegistrationNameSlise: (state, action) => {
			state.name = cloneDeep(action.payload);
		},
		setRegistrationCountrySlise: (state, action) => {
			state.country = cloneDeep(action.payload);
		},

	}
});

export default registrationSlice.reducer;

export const { setRegistrationEmailSlise, setRegistrationPasswordSlise,setRegistrationNameSlise,setRegistrationCountrySlise  } = registrationSlice.actions;