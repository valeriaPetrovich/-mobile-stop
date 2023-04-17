import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSlice from './redusers/loginSlice';

const rootReducer = combineReducers({
	 login: loginSlice,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};