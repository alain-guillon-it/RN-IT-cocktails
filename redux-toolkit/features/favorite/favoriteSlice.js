// Dépendances
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cocktails: [],
};

export const favoriteSlice = createSlice({
	name: 'favoriteRedux',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.cocktails.push(action.payload);
		},
		removeFavorite: (state, action) => {
			state.cocktails = state.cocktails.filter(
				(cocktail) => cocktail.idDrink !== action.payload.idDrink,
			);
		},
		toggleFavorite: (state, action) => {
			const index = state.cocktails.findIndex(
				(cocktail) => cocktail.idDrink === action.payload.idDrink,
			);
			if (index === -1) {
				state.cocktails.push(action.payload);
			} else {
				state.cocktails.splice(index, 1);
			}
		},
	},
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
