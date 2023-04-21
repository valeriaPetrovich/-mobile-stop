import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './redusers/loginSlice';
import searchStopsSlice from './redusers/searchStopsSlice';
import searchsearchFavoriteSlice from './redusers/searchFavoriteSlice';
import streetsSlice from './redusers/streetsSlice';
import favoriteSlice from './redusers/favoriteSlice';

const rootReducer = combineReducers({
  login: loginSlice,
  stop: searchStopsSlice,
  favorite: searchsearchFavoriteSlice,
  streets: streetsSlice,
  favoritesStreets:favoriteSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
