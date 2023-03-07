import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice';
import { IRecipe } from '../../interfaces/IRecipe';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const unfavoriteIconUrl = '';

export const FavoriteRecipes = () => {
    const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
    const dispatch = useDispatch();

    const onRemoveRecipeHandler = (recipe: IRecipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favoriteRecipes.map(createRecipeComponent)}
        </div>
    );

    function createRecipeComponent(recipe: IRecipe) {
        return (
            <Recipe recipe={recipe} key={recipe.id}>
                <FavoriteButton
                    onClickHandler={() => onRemoveRecipeHandler(recipe)}
                    icon={unfavoriteIconUrl}
                >
                    🖤 Remove Favorite
                </FavoriteButton>
            </Recipe>
        )
    }
};