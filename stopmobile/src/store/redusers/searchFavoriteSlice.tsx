import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

const initialState = {
	favorite: [],
};

export const searchsearchFavoriteSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setSearchFavoriteSlise: (state, action) => {
			state.favorite = cloneDeep(action.payload);
		},
	}
});

export default searchsearchFavoriteSlice.reducer;

export const { setSearchFavoriteSlise } = searchsearchFavoriteSlice.actions;