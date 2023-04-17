import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSlice from './redusers/loginSlice';
import stopsSlice from './redusers/stopsSlice';

const rootReducer = combineReducers({
	 login: loginSlice,
	 stop:stopsSlice,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};