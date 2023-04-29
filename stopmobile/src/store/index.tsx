import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './redusers/loginSlice';
import searchStopsSlice from './redusers/searchStopsSlice';
import searchFavoriteSlice from './redusers/searchFavoriteSlice';
import streetsSlice from './redusers/streetsSlice';
import favoriteSlice from './redusers/favoriteSlice';
import settingProfileSlice from './redusers/settingProfileSlice';
import registrationSlice from './redusers/registrationSlice';

const rootReducer = combineReducers({
  login: loginSlice,
  stop: searchStopsSlice,
  favorite: searchFavoriteSlice,
  streets: streetsSlice,
  favoritesStreets: favoriteSlice,
  setting: settingProfileSlice,
  registration: registrationSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
