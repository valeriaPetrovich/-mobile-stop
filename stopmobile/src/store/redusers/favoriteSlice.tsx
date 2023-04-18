import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	favorite: [],
};

export const favoriteSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setFavoriteSlise: (state, action) => {
			state.favorite = cloneDeep(action.payload);
		},
	}
});

export default favoriteSlice.reducer;

export const { setFavoriteSlise } = favoriteSlice.actions;