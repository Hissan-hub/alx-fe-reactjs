import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Pasta', description: 'Italian pasta' },
    { id: 2, title: 'Rice', description: 'Steamed rice' },
    { id: 3, title: 'Chicken Soup', description: 'Healthy soup' },
  ],

  favorites: [],
  recommendations: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      ),
    })),
}));

export default useRecipeStore;