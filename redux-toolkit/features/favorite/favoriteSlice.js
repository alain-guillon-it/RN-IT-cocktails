// Librairie Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.push(action.payload);
		},
		removeFavorite: (state, actions) => {
			state.value.splice(state.value.indexOf(action.payload), 1);
		},
	},
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
