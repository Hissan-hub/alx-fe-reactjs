import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(
    (state) => state.filteredRecipes
  );

  return (
    <div>
      {filteredRecipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;