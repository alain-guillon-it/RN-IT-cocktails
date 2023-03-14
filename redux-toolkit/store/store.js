// Librairie React Redux
import { configureStore } from '@reduxjs/toolkit';

// REDUCERS
import { favoriteSlice } from '../features/favorite/favoriteSlice';

export const store = configureStore({
	reducer: {
		favorite: favoriteSlice.reducer,
	},
});
