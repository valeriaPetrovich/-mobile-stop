import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	value: [],
};

export const favoriteSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setFavoriteSlise: (state, action) => {
			state.value = cloneDeep(action.payload);
		},
	}
});

export default favoriteSlice.reducer;

export const { setFavoriteSlise } = favoriteSlice.actions;