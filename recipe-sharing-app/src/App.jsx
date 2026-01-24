import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        }
      />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;