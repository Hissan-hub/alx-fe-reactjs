import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;