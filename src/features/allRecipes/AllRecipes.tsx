import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { IRecipe } from '../../interfaces/IRecipe';

export const AllRecipes = () => {
    const allRecipes = useSelector(selectFilteredAllRecipes);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
    }

    useEffect(onFirstRender, []);

    const onAddRecipeHandler = (recipe: IRecipe) => {
        dispatch(addRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {allRecipes.map((recipe: IRecipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton onClickHandler={() => onAddRecipeHandler(recipe)}>
                        ❤️ Add to Favorites
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    );
};


