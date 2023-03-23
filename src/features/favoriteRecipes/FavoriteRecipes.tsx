import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice';
import { IRecipe } from '../../interfaces/IRecipe';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

export const FavoriteRecipes = () => {
    const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
    const dispatch = useDispatch();

    const onRemoveRecipeHandler = (recipe: IRecipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favoriteRecipes.map((recipe: IRecipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton onClickHandler={() => onRemoveRecipeHandler(recipe)}>
                        🖤 Remove Favorite
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    );
};