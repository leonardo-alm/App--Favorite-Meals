import { AllRecipes } from '../features/allRecipes/AllRecipes';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes';

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Meals</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All Meals</h2>
        <AllRecipes />
      </section>
    </main>
  )
}