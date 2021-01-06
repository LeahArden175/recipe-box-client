import './App.css';
import { Route, Switch } from 'react-router-dom'
import AddRecipeRoute from './routes/AddRecipe/AddRecipeRoute';
import EditRecipeRoute from './routes/EditRecipeRoute/EditRecipeRoute';
import LoginRoute from './routes/LoginRoute/LoginRoute';
import NotFoundRoute from './routes/NotFoundRoute/NotFoundRoute';
import RecipeListRoute from './routes/RecipeListRoute/RecipeListRoute';
import RecipeRoute from './routes/RecipeRoute/RecipeRoute';
import RegistrationRoute from './routes/ResgistrationRoute/RegistrationRoute';
import LandingRoute from './routes/LandingRoute/LandingRoute';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
      <Route exact path='/' component={LandingRoute} />
      <Route exact path='/add-recipe' component={AddRecipeRoute} />
      <Route exact path='/edit-recipe' component={EditRecipeRoute} />
      <Route exact path='/login' component={LoginRoute} />
      <Route exact path='/recipe-list' component={RecipeListRoute} />
      <Route exact path='/recipe/:id' component={RecipeRoute} />
      <Route exact path='/registration' component={RegistrationRoute} />
      <Route component={NotFoundRoute} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
