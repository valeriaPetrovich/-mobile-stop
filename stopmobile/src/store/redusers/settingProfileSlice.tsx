import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	email: [],
    name:[],
    country:[],
};

export const settingProfileSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setSettingProfileEmailSlise: (state, action) => {
			state.email = cloneDeep(action.payload);
		},
		setSettingProfileNameSlise: (state, action) => {
			state.name = cloneDeep(action.payload);
		},
        setSettingProfileCountrySlise: (state, action) => {
			state.country = cloneDeep(action.payload);
		},

	}
});

export default settingProfileSlice.reducer;

export const { setSettingProfileEmailSlise, setSettingProfileNameSlise, setSettingProfileCountrySlise  } = settingProfileSlice.actions;