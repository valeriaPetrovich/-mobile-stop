import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './redusers/loginSlice';
import searchStopsSlice from './redusers/searchStopsSlice';
import searchFavoriteSlice from './redusers/searchFavoriteSlice';
import streetsSlice from './redusers/streetsSlice';
import favoriteSlice from './redusers/favoriteSlice';
import settingProfileSlice from './redusers/settingProfileSlice';

const rootReducer = combineReducers({
  login: loginSlice,
  stop: searchStopsSlice,
  favorite: searchFavoriteSlice,
  streets: streetsSlice,
  favoritesStreets: favoriteSlice,
  setting: settingProfileSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
