// Librairie React Redux
import { configureStore } from '@reduxjs/toolkit';

// REDUCERS
import { favoriteReducer } from '../features/favorite';

export const store = configureStore({
	reducer: {
		favorite: favoriteReducer,
	},
});
