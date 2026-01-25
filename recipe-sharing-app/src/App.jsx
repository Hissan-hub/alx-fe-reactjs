import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;