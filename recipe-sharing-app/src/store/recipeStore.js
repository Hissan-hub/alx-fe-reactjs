import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Pasta' },
    { id: 2, title: 'Rice' },
    { id: 3, title: 'Chicken Soup' },
  ],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;