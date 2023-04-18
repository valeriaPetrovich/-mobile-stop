import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSlice from './redusers/loginSlice';
import stopsSlice from './redusers/stopsSlice';
import favoriteSlice from './redusers/favoriteSlice';

const rootReducer = combineReducers({
	 login: loginSlice,
	 stop:stopsSlice,
	 favorite:favoriteSlice,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};