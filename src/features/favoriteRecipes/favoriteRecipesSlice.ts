import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IRecipe } from '../../interfaces/IRecipe';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

export const favoriteRecipesSlice = createSlice({
    name: "favoriteRecipes",
    initialState: [],
    reducers: {
        addRecipe: (state: IRecipe[], action) => {
            state.push(action.payload);
        },
        removeRecipe: (state: IRecipe[], action) => {
            const recipeIndex = state.findIndex(recipe => recipe.id === action.payload.id);
            if (recipeIndex !== -1) {
                state.splice(recipeIndex, 1);
            }
            /*             state = state.filter((recipe) => {
                            return recipe.id !== action.payload.id
                        }) */

        },
    },
});

export const selectFavoriteRecipes = (state: RootState) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state: RootState) => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return favoriteRecipes.filter((recipe: IRecipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;