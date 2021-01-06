import './App.css';
import AddRecipeRoute from './routes/AddRecipe/AddRecipeRoute';
import EditRecipeRoute from './routes/EditRecipeRoute/EditRecipeRoute';
import LoginRoute from './routes/LoginRoute/LoginRoute';
import NotFoundRoute from './routes/NotFoundRoute/NotFoundRoute';
import RecipeListRoute from './routes/RecipeListRoute/RecipeListRoute';
import RecipeRoute from './routes/RecipeRoute/RecipeRoute';
import RegistrationRoute from './routes/ResgistrationRoute/RegistrationRoute';

function App() {
  return (
    <div className="App">
      <AddRecipeRoute />
      <EditRecipeRoute />
      <LoginRoute />
      <NotFoundRoute />
      <RecipeListRoute />
      <RecipeRoute />
      <RegistrationRoute />
    </div>
  );
}

export default App;
