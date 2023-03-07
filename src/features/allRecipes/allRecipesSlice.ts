import allRecipesData from '../../data'
import { selectSearchTerm } from '../searchTerm/searchTermSlice';
import { IRecipe } from '../../interfaces/IRecipe';
import { RootState } from '../../app/store';
import { AnyAction } from '@reduxjs/toolkit';

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }
}

const initialState: IRecipe[] = [];

export const allRecipesReducer = (allRecipes = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        case 'favoriteRecipes/addRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/removeRecipe':
            return [...allRecipes, action.payload]
        default:
            return allRecipes;
    }
}

export const selectAllRecipes = (state: RootState) => state.allRecipes;

export const selectFilteredAllRecipes = (state: RootState) => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return allRecipes.filter((recipe: IRecipe) => {
        return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
};
